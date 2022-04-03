let lookupChar = require("../charLookup").lookupChar;   //import
let expect = require("chai").expect;

describe("lookupChar", function () {
    it("should return l for ('elena',1)", function () {
        let actual = lookupChar("elena",1)
        expect(actual).to.be.equal("l")
    })
     it("should return undefined for (1234,5)", function () {
        let actual = lookupChar(1234,5)
        expect(actual).to.be.undefined
    })
    it("should return undefined for ('elena','eli')", function () {
        let actual = lookupChar('elena','eli')
        expect(actual).to.be.undefined
    })
    it("should return undefined for ('elena','2')", function () {
        let actual = lookupChar('elena','2')
        expect(actual).to.be.undefined
    })
    it("should return undefined for ('elena',3.24)", function () {
        let actual = lookupChar('elena',3.24)
        expect(actual).to.be.undefined
    })
    it("should return 'Incorrect index' for ('elena',8)", function () {
        let actual = lookupChar("elena",8)
        expect(actual).to.be.equal('Incorrect index')
    })
    it("should return 'Incorrect index' for ('elena',-8)", function () {
        let actual = lookupChar("elena",-8)
        expect(actual).to.be.equal('Incorrect index')
    })
});
