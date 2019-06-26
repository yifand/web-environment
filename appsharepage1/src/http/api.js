// 查询兑换码详细信息
import fly from './config'
import qs from 'qs'

// 通用的get请求
export const get = (url, data) => {
  return fly.get(url, qs.stringify(data))
}

// 通用的post请求
export const post = (url, data) => {
  return fly.post(url, qs.stringify(data))
}


//判断用户是否存在
export const searchUserhByTel = function(params) {
  return post('/user/searchUserhByTel', {
    mobile: params.mobile
  })
}

// 获取短信验证码
export const getVcodeApi = function(params) {
  return post('/verifycode/send', {
    tel: params.tel,
    type: params.type // 0 登录 1 支付
  })
}

// 验证码登录
export const vcodeLogin = function(params) {
  return post('/app/login', {
    tel: params.tel,
    code: params.code,
    login_channel: 3
  })
}

export const searchCarById = function(params) {
  return post('/car/searchCarById', {
    id:params.id
  })
}
