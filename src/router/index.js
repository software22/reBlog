import Vue from 'vue'
import Router from 'vue-router'
import BootPage from '../components/BootPage.vue'
import index from '../components/index.vue'
import FloatBall from '../components/FloatBall.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/FloatBall',
      name: 'FloatBall',
      component: FloatBall
    },
    {
      path: '/bootpage',
      name: 'BootPage',
      component: BootPage
    }
  ]
})
