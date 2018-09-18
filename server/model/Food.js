const Sequelize = require('sequelize')
const db = require('../db.js')

const Food = db.define('food', {
  name: Sequelize.STRING,
  willEat: Sequelize.STRING
});

module.exports = Food
