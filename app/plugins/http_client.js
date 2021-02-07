
export default function ({ $axios, redirect, error: nuxtError }, inject) {
  // Create a custom axios instance
  const htttp = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        'X-Requested-With': 'XMLHttpRequest',
      },

    },
    onRequest: {

    }
  })
  // Set baseURL to something different
  htttp.setBaseURL('https://jsonplaceholder.typicode.com')
  htttp.onResponseError(error => {
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
  htttp.onRequest(config => {
    // console.log(context)
    console.log('Making request to ' + config.url)
    // console.log('request: ' + request)
    htttp.setToken("aaaaaaaaaaa") //cookiesから取得する。
  })
  // onRequestの処理追加
  // authorization にcookieから取得処理走らせる。

  // onerrorの処理追加

  // getとか、postとかの共通処理もいる？


  // Inject to context as $api
  inject('htttp', htttp)
}

// const http = function ({ $axios, redirect }) {
//   $axios.onRequest(config => {
//     console.log('Making request to ' + config.url)
//   })

//   $axios.onError(error => {
//     const code = parseInt(error.response && error.response.status)
//     if (code === 400) {
//       redirect('/400')
//     }
//   })
// }

// const returnHoge = (msg) => {
//   console.log(msg)
// }

// export default (context, inject) => {
//   inject('hoge', returnHoge)
// }
