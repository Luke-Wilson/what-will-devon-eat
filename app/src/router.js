import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import SaveAnswers from '@/views/SaveAnswers.vue'
import Play from '@/views/Play.vue'
import Winners from '@/views/Winners.vue'
import Admin from '@/views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/save-answers',
      name: 'save-answers',
      component: SaveAnswers
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/winners',
      name: 'winners',
      component: Winners
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})
