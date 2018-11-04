import { get, post } from './axiosConfig.js'
export default {
  getList (params) {
    return get('/getList', params)
  }
}
