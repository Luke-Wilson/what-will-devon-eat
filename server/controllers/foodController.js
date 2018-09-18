const db = require('../db.js');
const Food = require('../model/Food')

module.exports = {
  getAllFoods: (req, res) => {
    Food.findAll()
    .then(foods => res.send(foods))
  }
}
