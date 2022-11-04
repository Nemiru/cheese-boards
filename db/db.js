const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: Path2D.join(__dirname, 'CheeseBoard.sqlite'),
  logging: false
});

module.exports = db