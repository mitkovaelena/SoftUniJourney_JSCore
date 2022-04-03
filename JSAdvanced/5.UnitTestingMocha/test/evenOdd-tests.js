let isOddOrEven = require("../evenOdd").isOddOrEven;   //import
let expect = require("chai").expect;

describe("isOddOrEven", function () {
    it("should return 'odd' for 'elena'", function () {
        let actual = isOddOrEven('elena')
        expect(actual).to.be.equal("odd")
    })
    it("should return 'even' for 'elli'", function () {
        let actual = isOddOrEven('elly')
        expect(actual).to.be.equal("even")
    })
    it("should return undefined for 1234", function () {
        let actual = isOddOrEven(1234)
        expect(actual).to.be.undefined
    })
});
