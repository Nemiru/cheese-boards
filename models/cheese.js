const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Cheese extends Model {}

Cheese.init({
    title: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    
     description: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: db
})

module.exports = Cheese