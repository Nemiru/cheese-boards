const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Board extends Model {}

Board.init({
    type: {
        type: DataTypes.STRING,
    },
    
     description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true
    }  

}, {
    sequelize: db
})

module.exports = Board