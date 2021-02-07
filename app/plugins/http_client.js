
export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const htttp = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        'X-Requested-With': 'XMLHttpRequest',
      }
    }
  })

  // Set baseURL to something different
  htttp.setBaseURL('https://jsonplaceholder.typicode.com')

  htttp.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      console.log("リダイレクトします。")
      redirect('/')
    }
  })

  htttp.onRequest(config => {
    console.log('Making request to ' + config.url)
    // console.log('request: ' + request)
    htttp.setToken("aaaaaaaaaaa")
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
