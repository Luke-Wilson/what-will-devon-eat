import api from '@/utils/api'

const state = {
  // Initial state of your store
  foods: []

};

const getters = {
  // Getters to access your store values

};

const actions = {
  saveFoods({commit, state}) {
    api.saveFoods(state.foods)
    .then(r => {
      console.log('response from updateFood')
      console.log(r)
    })
  },
  getFoods({commit}) {
    console.log('dispatching getFoods action')
    api.getFoods()
    .then(r => {
      console.log('response from getFoods')
      console.log(r)
      commit('UPDATE_FOOD_PROP', {key: 'foods', value: r.data})
    })
  },

}

const mutations = {
  // Synchronous modifications of  your store
  UPDATE_FOOD_PROP(state, {key, value}) {
    state[key] = value
  },
  UPDATE_ANSWER(state, {id, answer}) {
    const foods = state.foods.map(ele => {
      if (ele.id === id) {
        ele.answer = answer
      }
      return ele
    })
    state.foods = foods
    console.log(state)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
