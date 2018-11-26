import { get, post } from './axiosConfig.js'
export default {
  getArticles (params) {
    return get('/articles', params)
  },
  getArticle (params) {
    return get('/article', params)
  },
  createArticle (params) {
    return post('/createArticle', params)
  }
}
