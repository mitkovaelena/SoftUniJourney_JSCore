let rgbToHexColor = require("../rgbToHex").rgbToHexColor;   //import
let expect = require("chai").expect;

describe("rgbToHexColor", function () {
    it("should return #FF9EAA for 255,158,170", function () {
        let expected = "#FF9EAA";
        let actual=rgbToHexColor(255,158,170);
        expect(actual).to.be.equal(expected)
    })
    it("should return #0C0D0E for 12,13,14", function () {
        let expected = "#0C0D0E";
        let actual=rgbToHexColor(12,13,14);
        expect(actual).to.be.equal(expected)
    })
    it("should return #000000 for 0,0,0", function () {
        let expected = "#000000";
        let actual=rgbToHexColor(0,0,0);
        expect(actual).to.be.equal(expected)
    })
    it("should return undefined for 256,158,170", function () {
        let expected = undefined;
        let actual=rgbToHexColor(256,158,170);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 255,158,400", function () {
        let expected = undefined;
        let actual=rgbToHexColor(255,158,400);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 255,300,170", function () {
        let expected = undefined;
        let actual=rgbToHexColor(255,300,170);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for -98,158,170", function () {
        let expected = undefined;
        let actual=rgbToHexColor(-98,158,170);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 255,158,-40", function () {
        let expected = undefined;
        let actual=rgbToHexColor(255,158,-40);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 255,-30,170", function () {
        let expected = undefined;
        let actual=rgbToHexColor(255,-30,170);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 3.14,158,170", function () {
        let expected = undefined;
        let actual=rgbToHexColor(3.14,158,170);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 255,158,3.14", function () {
        let expected = undefined;
        let actual=rgbToHexColor(255,158,3.14);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 255,3.14,170", function () {
        let expected = undefined;
        let actual=rgbToHexColor(255,3.14,170);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for '23',158,170", function () {
        let expected = undefined;
        let actual=rgbToHexColor('23',158,170);
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 255,158,'23'", function () {
        let expected = undefined;
        let actual=rgbToHexColor(255,158,'23');
        expect(actual).to.be.undefined;
    })
    it("should return undefined for 255,'23',170", function () {
        let expected = undefined;
        let actual=rgbToHexColor(255,'23',170);
        expect(actual).to.be.undefined;
    })
});
