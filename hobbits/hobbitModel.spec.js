/*
testing the insert manually.

- make sure the data is not on the table (clean tables before each test)
- insert the data
- check that the data is in the table

*/
const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel.js");

describe("environment", function () {
    it("should be using the testing database", function () {
        expect(process.env.DB_ENV).toBe("testing");
    });
});

describe("hobbits model", function () {
    describe("insert()", function () {
        beforeEach(async () => {
            await db("hobbits").truncate();
        });

        it("should insert hobbits into database", async () => {
            // table was cleared by the beforeEach() function
            await Hobbits.insert({ name: "rosie" });
            await Hobbits.insert({ name: "sam" });

            const hobbits = await db("hobbits");

            expect(hobbits).toHaveLength(2);
        });
    });
});
