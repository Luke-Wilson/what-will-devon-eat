const secrets = require('./secrets')
console.log('secrets')
console.log(secrets)

const Sequelize = require('sequelize');

const sequelize = new Sequelize(secrets.database, secrets.username, secrets.password, {
  host: 'den1.mysql2.gear.host',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});


// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

module.exports = sequelize
