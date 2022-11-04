const db = require("../db/db")
const { Cheese } = require("../models")

describe("Test creating Cheese", () => {
    beforeEach( async () => {
        await Cheese.sync({ force: true })
        await Cheese.create({type: "Cheese", description: "very good stuff"})
    })

    test('there is a cheese name title', async () => {
        const test = await Cheese.findOne({where: {title: 'Cheese'}});
        expect(test.getDataValue("title")).toMatch("Cheese");
    })

    test("there is the board description", async () => {
        const test = await Cheese.findOne({where: {description: "very good stuff"}});
        expect(test.getDataValue("description")).toMatch("very good stuff")
    })

}) 