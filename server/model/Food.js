const Sequelize = require('sequelize')
const db = require('../db.js')

const Food = db.define('food', {
  name: Sequelize.STRING,
  answer: Sequelize.STRING
});

module.exports = Food
