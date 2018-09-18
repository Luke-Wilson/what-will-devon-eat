const db = require('../db.js');
const Player = require('../model/Player')

module.exports = {
  getAllPlayers: (req, res) => {
    Player.findAll()
    .then(players => res.send(players))
  },

  createPlayer: (req, res) => {
    const { playerName } = req.body
    console.log('playerName')
    console.log(playerName)
    Player.create({
      playerName
    }).then(p => res.send(p))
  }
}
