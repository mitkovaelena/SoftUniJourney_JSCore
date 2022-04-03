let createCalculator = require("../AddSubstractModule").createCalculator;   //import
let expect = require("chai").expect;

describe("createCalculator", function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    })
    it("should return 0 after {get}", function () {
        let actual = calc.get()
        expect(actual).to.be.equal(0)
    })
    it('should have add, subtract, get functions', () => {
        expect(calc.hasOwnProperty('add')).to.be.true;
        expect(calc.hasOwnProperty('subtract')).to.be.true;
        expect(calc.hasOwnProperty('get')).to.be.true;
    });
    it("should return 5 after {add:2,add:3}", function () {
        calc.add(2); calc.add(3);
        let actual = calc.get()
        expect(actual).to.be.equal(5)
    })
    it("should return 5 after {add:10,subtract:5}", function () {
        calc.add(10); calc.subtract(5);
        let actual = calc.get()
        expect(actual).to.be.equal(5)
    })
    it("should return -5 after {subtract:5}", function () {
        calc.subtract(5);
        let actual = calc.get()
        expect(actual).to.be.equal(-5)
    })
    it("should return NaN after {subtract:'eli'}", function () {
        calc.subtract("eli");
        let actual = calc.get()
        expect(actual).to.be.NaN
    })
    it("should return NaN after {add:'eli'}", function () {
        calc.add("eli");
        let actual = calc.get()
        expect(actual).to.be.NaN
    })
    it("should return -4 after {subtract:'4'}", function () {
        calc.subtract("4");
        let actual = calc.get()
        expect(actual).to.be.equal(-4)
    })
    it("should return 4 after {add:'4'}", function () {
        calc.add("4");
        let actual = calc.get()
        expect(actual).to.be.equal(4)
    })
    it('should return 0.30000000000000004 on {add 0.1, add 0.2, get}', () => {
        calc.add(0.1);
        calc.add(0.2);
        expect(calc.get()).to.equal(0.1 + 0.2);
    });
    it('should return NaN on {add EMPTY, get}', () => {
        calc.add();
        expect(calc.get()).to.be.NaN;
    });

    it('should return NaN on {subtract EMPTY, get}', () => {
        calc.subtract();
        expect(calc.get()).to.be.NaN;
    });
});
