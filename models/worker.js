const Sequelize = require("sequelize")
const sequelize = require("../connection/conn")

const Worker = sequelize.define("worker" , {

    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },

    first_name:{
        type:Sequelize.STRING,
        allowNull:true

    },

    middle_name:{
        type:Sequelize.STRING,
        allowNull:true
    },

    last_name:{
        type:Sequelize.STRING,
        allowNull:true
    },

    idno:{

        type:Sequelize.STRING,
        allowNull:true

    },

    contact:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports = Worker