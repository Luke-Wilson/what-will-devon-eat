import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import SaveAnswers from '@/views/SaveAnswers.vue'

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
    }
  ]
})
