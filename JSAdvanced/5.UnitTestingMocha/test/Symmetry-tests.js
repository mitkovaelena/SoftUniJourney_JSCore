let isSymmetric = require("../Symmetry").isSymmetric;   //import
let expect = require("chai").expect;

describe("Symmetry", function () {
    it("should return false for [1,2,3]", function () {
        let actual=isSymmetric([1,2,3]);
        expect(actual).to.be.false
    })
    it("should return true for [1,2,1]", function () {
        let actual=isSymmetric([1,2,1]);
        expect(actual).to.be.true
    })
    it("should return true for [-1,3,3,-1]", function () {
        let actual=isSymmetric([-1,3,3,-1]);
        expect(actual).to.be.true
    })
    it("should return false for [1,3,3,-1]", function () {
        let actual=isSymmetric([1,2,3,-1]);
        expect(actual).to.be.false
    })
    it("should return true for [1]", function () {
        let actual=isSymmetric([1]);
        expect(actual).to.be.true
    })
    it("should return false for [1,2]", function () {
        let actual=isSymmetric([1,2]);
        expect(actual).to.be.false
    })
    it("should return true for ['eli',2,'eli']", function () {
        let actual=isSymmetric(['eli',2,'eli']);
        expect(actual).to.be.true
    })
    it("should return false for ['eli',2,2]", function () {
        let actual=isSymmetric(['eli',2,2]);
        expect(actual).to.be.false
    })
    it("should true true for []", function () {
        let actual=isSymmetric([]);
        expect(actual).to.be.true
    })
    it("should return false for 2,4,4,2", function () {
        let actual=isSymmetric(2,4,4,2);
        expect(actual).to.be.false
    })
    it("should return false for ['3',3]", function () {
        let actual=isSymmetric(['3',3]);
        expect(actual).to.be.false
    })
});
