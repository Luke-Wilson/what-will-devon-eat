const Sequelize = require('sequelize')
const db = require('../db.js')

const Player = db.define('player', {
  playerName: Sequelize.STRING,
  score: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  }
});
db.sync()
module.exports = Player
