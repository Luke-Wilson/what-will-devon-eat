import axios from 'axios'

let apiBaseUrl = `${window.location.origin}/api`
if (window.location.origin.includes("localhost")) {
  apiBaseUrl = 'http://localhost:3000/api'
}

export default {
  createPlayer({playerName}) {
    return axios({
      method: 'post',
      url: `${apiBaseUrl}/player`,
      data: {
        playerName,
      },
    });
  },
  getFoods() {
    return axios({
      method: 'get',
      url: `${apiBaseUrl}/food`,
    });
  },
  saveFoods(foods) {
    return axios({
      method: 'put',
      url: `${apiBaseUrl}/food`,
      data: {
        foods
      },
    });
  },
}
