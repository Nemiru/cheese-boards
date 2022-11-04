const Board = require("./board");
const Cheese = require("./cheese");
const User = require("./user");


/********** one to many **************/
// multiple boards can be added to a user
User.hasMany(Board);
Board.belongsTo(User);

/************** many to many ***********/
// board can have many cheeses
Board.belongsToMany(Cheese, {through: "CheeseBoard"});
// a cheese can be on many boards
Cheese.belongsToMany(Board, {through: "CheeseBoard"});


module.exports = { Board, Cheese, User}