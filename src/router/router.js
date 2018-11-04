const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于我们'
    }
  }
]
export default routes
