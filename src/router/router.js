const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Article = () => import('@/views/Article.vue')
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
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article,
    meta: {
      title: '文章详情'
    }
  }
]
export default routes
