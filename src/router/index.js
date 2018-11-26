import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
// import { setTitle } from '../utils'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/* router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  next()
}) */
export default router
