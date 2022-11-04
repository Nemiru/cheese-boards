const { User } = require("../models")
const db = require("../db/db")


describe("Test creating User",  () => {
    beforeEach( async () => {
        await User.sync({ force: true })
        await User.create({name: "User1", email: "user1@gmail.com"})
    })

    test('user has name', async () => {
        const test = await User.findOne({where: {name: 'User1'}});
        expect(test.getDataValue("name")).toMatch("User1");
    })

    test("user has an email", async () => {
        const test = await User.findOne({where: {email: "user1@gmail.com"}});
        expect(test.getDataValue("email")).toMatch("user1@gmail.com")
    })

}) 


