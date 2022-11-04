const { Board, Cheese, User} = require('../models')

async function main(){
    const user = await User.findAll()
    console.log(User)
    await Board.setUser([1])

    const user3 = await User.findByPk(2)
    console.log(user3)
    await user3.getBoard(users[3])


/*****************
 * let books = await Book.findAll()
 * console.log(books)
 * console.table(books.map(b => b.toJSON())) 
 */

// let books = await Book.findAll()
// await book[0].addQuote(quotes[0])
// await book[0].addQuote(quotes[1])
}

main()


