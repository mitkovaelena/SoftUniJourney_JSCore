let mathEnforcer = require("../mathEnforcer").mathEnforcer;   //import
let expect = require("chai").expect;

describe("mathEnforcer", function () {
    it('should have add, subtract, sum functions', () => {
        expect(mathEnforcer.hasOwnProperty('addFive')).to.be.true;
        expect(mathEnforcer.hasOwnProperty('subtractTen')).to.be.true;
        expect(mathEnforcer.hasOwnProperty('sum')).to.be.true;
    });
    it("should return 10 for {addFive(5)}", function () {
        let actual = mathEnforcer.addFive(5)
        expect(actual).to.be.equal(10)
    })
    it("should return 10 for {subtractTen(20)}", function () {
        let actual = mathEnforcer.subtractTen(20)
        expect(actual).to.be.equal(10)
    })
    it("should return 10 for {sum(1,9)}", function () {
        let actual = mathEnforcer.sum(1,9)
        expect(actual).to.be.equal(10)
    })
    it("should return -10 for {addFive(-15)}", function () {
        let actual = mathEnforcer.addFive(-15)
        expect(actual).to.be.equal(-10)
    })
    it("should return -9 for {subtractTen(1)}", function () {
        let actual = mathEnforcer.subtractTen(0)
        expect(actual).to.be.equal(-9)
    })
    it("should return -10 for {sum(1,-11)}", function () {
        let actual = mathEnforcer.sum(1,-11)
        expect(actual).to.be.equal(-10)
    })
    it("should return -10 for {sum(-11,1)}", function () {
        let actual = mathEnforcer.sum(-11,1)
        expect(actual).to.be.equal(-10)
    })
    it("should return undefined for {addFive('eli')}", function () {
        let actual = mathEnforcer.addFive("eli")
        expect(actual).to.be.undefined
    })
    it("should return undefined for {subtractTen('eli')}", function () {
        let actual = mathEnforcer.subtractTen("eli")
        expect(actual).to.be.undefined
    })
    it("should return undefined for {sum(1,'eli')}", function () {
        let actual = mathEnforcer.sum(1,"eli")
        expect(actual).to.be.undefined
    })
    it("should return undefined for {sum('eli',2)}", function () {
        let actual = mathEnforcer.sum("eli",2)
        expect(actual).to.be.undefined
    })
    it("should return 10.9 for {addFive(4.9)}", function () {
        let actual = mathEnforcer.addFive(4.9)
        expect(actual).to.be.equal(4.9+5)
    })
    it("should return 10.9 for {subtractTen(20.9)}", function () {
        let actual = mathEnforcer.subtractTen(20.9)
        expect(actual).to.be.equal(20.9-10)
    })
    it("should return 9.4 for {sum(1.4,8)}", function () {
        let actual = mathEnforcer.sum(1.4,8)
        expect(actual).to.be.equal(1.4+8)
    })

    it("should return 9.6 for {sum(1,8.6)}", function () {
        let actual = mathEnforcer.sum(1,8.6)
        expect(actual).to.be.equal(1+8.6)
    })
    it("should return 0.1 for {addFive(-4.9)}", function () {
        let actual = mathEnforcer.addFive(-4.9)
        expect(actual).to.be.equal(5-4.9)
    })
    it("should return -10.9 for {subtractTen(-20.9)}", function () {
        let actual = mathEnforcer.subtractTen(-20.9)
        expect(actual).to.be.equal(-20.9-10)
    })
    it("should return ... for {sum(-1.4,8)}", function () {
        let actual = mathEnforcer.sum(-1.4,8)
        expect(actual).to.be.equal(-1.4+8)
    })

    it("should return ... for {sum(1,-8.6)}", function () {
        let actual = mathEnforcer.sum(1,-8.6)
        expect(actual).to.be.equal(1-8.6)
    })
});
