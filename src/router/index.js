import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import PageView from '../views/PageView.vue'
// import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      sub: ArticleView,
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/article/:id(\\d{1,3})',
    name: 'Article',
    component: ArticleView,
    props: true,
    children: [
      {
        path: 'page/:page_num',
        name: 'Page',
        component: PageView,
        props: true,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
