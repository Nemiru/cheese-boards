const db = require("../db/db")
const { Board } = require("../models")




describe("Test creating Box",  () => {
    beforeEach( async () => {
        await db.sync({ force: true })
        await Board.create({type: "Wood", description: "very good board", rating: 4})
    })

    test('there is a board type', async () => {
        const test = await Board.findOne({where: {type: 'Wood'}});
        expect(test.getDataValue("type")).toMatch("Wood");
    })

    test("there is the board description", async () => {
        const test = await Board.findOne({where: {description: "very good board"}});
        expect(test.getDataValue("description")).toMatch("very good board")
    })

    test("there is the board rating", async () => {
        const test = await Board.findOne({where: {rating: "4"}});
        expect(test.getDataValue("rating")).toMatch("4")
    })

}) 

