const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("kazi" , "user" , "kaboi" , {dialect:"mysql" , host:"localhost"})

module.exports = sequelize