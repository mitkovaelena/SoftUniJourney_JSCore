this.jsdom = require('jsdom-global')();
$ = require('jquery');

let sharedObject = require("../sharedObject").sharedObject;   //import
let expect = require("chai").expect;

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;


describe("sharedObject", function () {

    describe("initValues", function () {
        it("name prop start = null", function () {
            expect(sharedObject.name).to.be.equal(null)
        })
        it("income prop start = null", function () {
            expect(sharedObject.income).to.be.equal(null)
        })
        it("name box start = ''", function () {
            let nameTextBox = $("#name")
            expect(nameTextBox.val()).to.be.equal("")
        })
        it("income box start = ''", function () {
            let incomeTextBox = $("#income")
            expect(incomeTextBox.val()).to.be.equal("")
        })
    })

    describe("changeFuncs", function () {
        it('should return null on testObject.name after changeName("")', () => {
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal(null);
        });
        it("cangeName", function () {
            let nameTextBox = $("#name")
            sharedObject.changeName("eli")
            expect(nameTextBox.val()).to.be.equal("eli")
        })
        it("cangeName", function () {
            let nameTextBox = $("#name")
            sharedObject.changeName(4)
            expect(nameTextBox.val()).to.be.equal("4")
        })
        it("cangeName", function () {
            let nameTextBox = $("#name")
            let iniVal = nameTextBox.val()
            sharedObject.changeName("")
            expect(nameTextBox.val()).to.be.equal(iniVal)
        })
        it("changeIncome", function () {
            let incomeTextBox = $("#income")
            sharedObject.changeIncome(12)
            expect(incomeTextBox.val()).to.be.equal("12")
        })
        it("changeIncome", function () {
            let incomeTextBox = $("#income")
            sharedObject.changeIncome(12)
            sharedObject.changeIncome(24)
            sharedObject.changeIncome(36)
            expect(incomeTextBox.val()).to.be.equal("36")
        })
        it("changeIncome", function () {
            let incomeTextBox = $("#income")
            let iniVal = incomeTextBox.val()
            sharedObject.changeIncome("")
            expect(incomeTextBox.val()).to.be.equal(iniVal)
        })
        it("changeIncome", function () {
            let incomeTextBox = $("#income")
            let iniVal = incomeTextBox.val()
            sharedObject.changeIncome(0)
            expect(incomeTextBox.val()).to.be.equal(iniVal)
        })
        it("changeIncome", function () {
            let incomeTextBox = $("#income")
            let iniVal = incomeTextBox.val()
            sharedObject.changeIncome(3.12)
            expect(incomeTextBox.val()).to.be.equal(iniVal)
        })
        it("changeIncome", function () {
            let incomeTextBox = $("#income")
            let iniVal = incomeTextBox.val()
            sharedObject.changeIncome("elena")
            expect(incomeTextBox.val()).to.be.equal(iniVal)
        })
        it("changeIncome", function () {
            let incomeTextBox = $("#income")
            let iniVal = incomeTextBox.val()
            sharedObject.changeIncome(-5)
            expect(incomeTextBox.val()).to.be.equal(iniVal)
        })
        it("changeIncome", function () {
            let incomeTextBox = $("#income")
            let iniVal = incomeTextBox.val()
            sharedObject.changeIncome("13")
            expect(incomeTextBox.val()).to.be.equal(iniVal)
        })
    })

    describe("updateFuncs", function () {
        it("updateName", function () {
            let nameTextBox = $("#name")
            nameTextBox.val("eli")
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal("eli")
        })
        it("updateName", function () {
            let nameTextBox = $("#name")
            nameTextBox.val("")
            let initVal = sharedObject.name
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal(initVal)
        })
        it("updateIncome", function () {
            let incomeTextBox = $("#income")
            incomeTextBox.val("5")
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(5)
        })
        it("updateIncome", function () {
            let incomeTextBox = $("#income")
            incomeTextBox.val("elena")
            let initVal = sharedObject.income
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(initVal)
        })
        it("updateIncome", function () {
            let incomeTextBox = $("#income")
            incomeTextBox.val("0")
            let initVal = sharedObject.income
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(initVal)
        })
        it("updateIncome", function () {
            let incomeTextBox = $("#income")
            incomeTextBox.val("4.23")
            let initVal = sharedObject.income
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(initVal)
        })
        it("updateIncome", function () {
            let incomeTextBox = $("#income")
            incomeTextBox.val("-3")
            let initVal = sharedObject.income
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(initVal)
        })
        it("updateIncome", function () {
            let incomeTextBox = $("#income")
            incomeTextBox.val(6)
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(6)
        })
    })
});