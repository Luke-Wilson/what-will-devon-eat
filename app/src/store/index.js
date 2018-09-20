import Vue from 'vue'
import Vuex from 'vuex'

import foodModule from './modules/foodModule'
import playerModule from './modules/playerModule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    foodModule,
    playerModule,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : [],
})
