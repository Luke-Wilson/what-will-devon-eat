import api from '@/utils/api'

const state = {
  messages: [],
  playerName: "",
};

const getters = {

};

const actions = {
  createPlayer: ({commit}, {playerName}) => {
    console.log('playerName in action')
    console.log(playerName)
    api.createPlayer({playerName})
    .then(r => {
      commit('UPDATE_PLAYERS_PROP', {key: "playerName", value: playerName})
    })
  }
}

const mutations = {
  UPDATE_PLAYERS_PROP(state, {key, value}) {
    state[key] = value
  },
  PUSH_MESSAGE(state, {message}) {
    state.messages.push(message)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
