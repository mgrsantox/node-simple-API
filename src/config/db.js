const { Sequelize } = require('sequelize');

const db = new Sequelize('learn_node', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = db;
