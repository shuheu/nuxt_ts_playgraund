
export default function (context, inject) {
  const http = new HTTP(context)
  inject('http_class', http)

}

class HTTP {
  constructor({ $axios, redirect, error: nuxtError }) {
    this._axios = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*',
          'X-Requested-With': 'XMLHttpRequest',
        },
      },
    })

    this._axios.setBaseURL('https://jsonplaceholder.typicode.com')

    this._axios.onResponseError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 404) {
        console.log("リダイレクトします。")
        nuxtError({
          statusCode: 404,
          message: 'エラー'
        })
      } else if (code == 503) {
        console.log("メンテナスです")
        nuxtError({
          statusCode: 503,
          message: 'メンテナンスや'
        })
      }
    })

    this._axios.onRequest(config => {
      // console.log(context)
      console.log('Making request to ' + config.url)
      // console.log('request: ' + request)
      this._axios.setToken("aaaaaaaaaaa") //cookiesから取得する。
    })
  }


  async get(url, option = {}) {
    const res = await this._axios.get(url, option = {})
    console.log(res)
  }

  async hogeShot() {

    console.log("Hogehgoegheogheoghoeghoehoge")
  }
}
