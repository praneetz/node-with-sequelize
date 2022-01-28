const { Sequelize } = require('sequelize');
const db = new Sequelize('demo', 'admin','admin', {
    host: 'localhost',
    dialect: 'mysql',

});

db.authenticate()

module.exports = db;