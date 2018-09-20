//require controllers
var foodController = require('../controllers/foodController.js');
var playersController = require('../controllers/playersController.js');

module.exports = function(app, express) {
  //PLAYERS ROUTES
  // app.get("/api/players/:id", playersController.getCustomerById);
  app.post("/api/player", playersController.createPlayer);

  //FOOD ROUTES
  app.get("/api/food", foodController.getAllFoods);

  app.put("/api/food", foodController.saveFoods);


};
