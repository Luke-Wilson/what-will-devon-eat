import api from '@/utils/api'

const state = {

};

const getters = {

};

const actions = {
  createPlayer: ({commit}, {playerName}) => {
    console.log('playerName in action')
    console.log(playerName)
    api.createPlayer({playerName})
  }
}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
