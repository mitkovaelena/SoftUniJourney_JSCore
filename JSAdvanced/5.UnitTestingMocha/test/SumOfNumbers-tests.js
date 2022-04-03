let sum = require("../SumOfNumbers").sum;   //import
let expect = require("chai").expect;

describe("SumOfNumbers", function () {
    it("should return 3 for [1,2]", function () {
        let expectedSum = 3;
        let actualSum=sum([1,2]);
        expect(actualSum).to.be.equal(expectedSum)
    })
    it("should return 5 for [5]", function () {
        let expectedSum = 5;
        let actualSum=sum([5]);
        expect(actualSum).to.be.equal(expectedSum)
    })
    it("should return 0 for []", function () {
        let expectedSum = 0;
        let actualSum=sum([]);
        expect(actualSum).to.be.equal(expectedSum)
    })
    it("should return 6.5 for [2.4,2.6,1.5]", function () {
        let expectedSum = 6.5;
        let actualSum=sum([2.4,2.6,1.5]);
        expect(actualSum).to.be.equal(expectedSum)
    })
    it("should return NaN for ['pesho','eli']", function () {
        let actualSum=sum(['pesho','eli']);
        expect(actualSum).to.be.NaN;
    })
});
