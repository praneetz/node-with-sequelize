const Sequelize = require('sequelize');
const db = require('../config/db');

const User=db.define("user",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=User