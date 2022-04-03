let Console = require("../C#Console").Console;   //import
let expect = require("chai").expect;

describe("c# Console", function () {
    it("test Console.placeholder ", function () {
        let actual = JSON.stringify(Console.placeholder)
        expect(actual).to.be.equal(JSON.stringify(/{\d+}/g))
    })
    it("test Console.writeline 1 object", function () {
        let actual = Console.writeLine({eli:5})
        expect(actual).to.be.equal(JSON.stringify({eli:5}))
    })
    it("test Console.writeline 1 string", function () {
        let actual = Console.writeLine("elena")
        expect(actual).to.be.equal("elena")
    })
    it("test Console.writeline 1 not string", function () {
        let actual = Console.writeLine(7)
        expect(actual).to.be.undefined
    })
    it("test Console.writeline more first not string", function () {
        expect(() => Console.writeLine(7,"eli","eli")).to.throw("No string format given!")   //trow exeption LAMBDA
    })
    it("test Console.writeline more args than needed", function () {
        expect(() => Console.writeLine("elena {0}","4","4","4")).to.throw(("Incorrect amount of parameters given!"))
    })
    it("test Console.writeline more args than needed", function () {
        expect(() => Console.writeLine("elena {5}","4")).to.throw(("Incorrect placeholders given!"))
    })
    it("test Console.writeline more args than needed", function () {
        expect(() => Console.writeLine("elena","4")).to.throw(("Cannot read property 'sort' of null"))
    })
    it("test Console.writeline incorect placeholders", function () {
        expect(() => Console.writeLine("elena {7} {2}","4","4")).to.throw(("Incorrect placeholders given!"))
    })
    it("test Console.writeline more first not string", function () {
        let actual = Console.writeLine("elena {0} {1} {2}","4","4","4")
        expect(actual).to.be.equal("elena 4 4 4")
    })
    it("test Console.writeline more first not string", function () {
        let actual = Console.writeLine("elena {2} {0} {1}","4","4","4")
        expect(actual).to.be.equal("elena 4 4 4")
    })
    it("test Console.writeline more first not string", function () {
        let actual = Console.writeLine("elena {0} {0} {0}","4","4","4")
        expect(actual).to.be.equal("elena 4 4 4")
    })
})
