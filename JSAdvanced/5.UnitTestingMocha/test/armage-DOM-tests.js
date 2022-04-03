this.jsdom = require('jsdom-global')();
$ = require('jquery');

let nuke = require("../armage-DOM").nuke;   //import
let expect = require("chai").expect;

describe("armageDOM", function () {
    beforeEach(function () {
        document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
`;
    })
    it("shold remove node", function () {
        let selector1 = '.target';
        let selector2 = '.nested';
        nuke(selector1,selector2)
        expect( $(selector1+selector2).length).to.be.equal(0)
    })
    it("shold not remove node", function () {
        let selector1 = 2;
        let selector2 = '.nested';
        let before = document.body.innerHTML
        nuke(selector1,selector2)
        expect(document.body.innerHTML).to.be.equal(before)
    })
    it("shold not remove node", function () {
        let selector1 = ".nested";
        let selector2 = ".inside";
        let before = document.body.innerHTML
        nuke(selector1,selector2)
        expect(document.body.innerHTML).to.be.equal(before)
    })
    it("shold not remove node", function () {
        let selector1 = "#target";
        let selector2 = "#target";
        let before = document.body.innerHTML
        nuke(selector1,selector2)
        expect(document.body.innerHTML).to.be.equal(before)
    })
    it("shold not remove node", function () {
        let selector1 = "#target";
        let selector2 = "#eli";
        let before = document.body.innerHTML
        nuke(selector1,selector2)
        expect(document.body.innerHTML).to.be.equal(before)
    })
    it("shold remove node", function () {
        let selector1 = "#eli";
        let selector2 = "#target";
        let before = document.body.innerHTML
        nuke(selector1,selector2)
        expect(document.body.innerHTML).to.be.equal(before)
    })
});
