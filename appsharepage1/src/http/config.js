import config from '../config'
// import store from '@/store'
var fly = require('flyio')
// var fly = new Fly()
// 配置请求基地址
// //定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
// //设置超时
fly.config.timeout = 40000
// //设置请求基地址
fly.config.baseURL = config.BASE_URL

// 添加请求拦截器
fly.interceptors.request.use(request => {
  // 给所有请求添加自定义header
  // if (store.state.loginInfo.token) {
  //   // console.log(store.state.loginInfo, 'token')
  //   request.headers['jf_token'] = store.state.loginInfo.token
  // }
  // if (request.url === '/car/appCarList') {
  //   request.headers['content-type'] = 'application/json'
  // }
  // 打印出请求体
  // console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(response => {
  return response.data
}, err => {
  console.log('err', err)
  // 发生网络错误后会走到这里

  // return Promise.resolve("ssss")
})
// Vue.prototype.$http=fly //将fly实例挂在vue原型上

export default fly