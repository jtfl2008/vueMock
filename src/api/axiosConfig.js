import axios from 'axios'
import qs from 'qs'
// import { Message } from 'element-ui'
// 响应时间
axios.defaults.timeout = 5000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
// 配置接口地址
axios.defaults.baseURL = 'http://127.0.0.1:7001/'

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    // console.log('错误的传参', 'fail')
    // Message.error('错误的传参')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.code === 200) {
      return res
    } else {
      return Promise.reject(res)
    }
  },
  err => {
    // console.log('异常：' + err.message)
    // Message.error('接口异常：' + err.message)
    return Promise.reject(err.message)
  }
)
// GET 请求方式
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(
        res => {
          resolve(res.data.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}
export default {
  get,
  post
}
