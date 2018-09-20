const db = require('../db.js');
const Food = require('../model/Food')

module.exports = {
  getAllFoods: (req, res) => {
    Food.findAll()
    .then(foods => res.send(foods))
  },
  saveFoods: (req, res) => {
    console.log('req.body')
    console.log(req.body)
    const {foods} = req.body
    foods.forEach(food => {
      Food.update(
        {
          answer: food.answer,
        },
        {
          where: {
            id: food.id
          }
        }
      )
    })
  },

}
