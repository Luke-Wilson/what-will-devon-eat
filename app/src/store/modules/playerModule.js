import api from '@/utils/api'

const state = {
  messages: [],
  playerName: "",
  currentAnswer: "",
  score: 0,
  finalScores: [],
};

const getters = {
  getOrderedFinalScores: (state) => {
    return state.finalScores.sort((a,b) => { a.score < b.score ? 1 : -1})
  }
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
  addMessage({commit}, message) {
    commit('PUSH_MESSAGE', {message})
  }
}

const mutations = {
  UPDATE_PLAYERS_PROP(state, {key, value}) {
    state[key] = value
  },
  PUSH_MESSAGE(state, {message}) {
    let messages = state.messages
    messages.unshift(message)
    if (messages.length > 20) {
      messages = messages.slice(0,19)
    }
    state.messages = messages
  },
  UPDATE_SCORE(state, points) {
    state.score += points
  },
  PUSH_FINAL_SCORE(state, {playerName, score}) {
    state.finalScores.push({playerName, score})
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
