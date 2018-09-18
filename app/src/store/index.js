import Vue from 'vue'
import Vuex from 'vuex'

import food from './modules/food'
import players from './modules/players'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    food,
    players,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : [],
})
