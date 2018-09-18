import axios from 'axios'

const apiBaseUrl = 'http://localhost:3000/api'

export default {
  createPlayer({playerName}) {
    console.log('playerName')
    console.log(playerName)
    return axios({
      method: 'post',
      url: `${apiBaseUrl}/player`,
      data: {
        playerName
      },
    });
  },
  // getRoomListing(queryParams) {
  //   return axios.get(`${muraAPIEndpoint}`, {
  //     params: {
  //       method: 'getCachedRoomListing',
  //       ...queryParams,
  //     }
  //   })
  // },
  //
  // sendReservation(reservation) {
  //   return axios.post(`${muraAPIEndpoint}?method=sendReservation`, {
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     content: JSON.stringify(reservation)
  //   })
  // },
}
