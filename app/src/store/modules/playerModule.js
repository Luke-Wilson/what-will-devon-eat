import api from '@/utils/api'

const state = {
  messages: [],
  playerName: "",
  currentAnswer: "",
  score: 0,
};

const getters = {

};

const actions = {
  createPlayer: ({commit}, {playerName}) => {
    api.createPlayer({playerName})
    .then(r => {
      commit('UPDATE_PLAYERS_PROP', {key: "playerName", value: playerName})
    })
  },
  calculateNewScore: ({commit, rootGetters, state}) => {
    const answer = rootGetters.currentQuestion.answer
    if (answer === 'sometimes' && state.currentAnswer === 'sometimes') {
      commit('UPDATE_SCORE', 2)
    } else if (answer === 'sometimes' && state.currentAnswer !== 'sometimes') {
      commit('UPDATE_SCORE', 0.5)
    } else if (answer === state.currentAnswer) {
      commit('UPDATE_SCORE', 1)
    }
  },
}

const mutations = {
  UPDATE_PLAYERS_PROP(state, {key, value}) {
    state[key] = value
  },
  PUSH_MESSAGE(state, {message}) {
    state.messages.push(message)
  },
  UPDATE_SCORE(state, points) {
    state.score += points
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
