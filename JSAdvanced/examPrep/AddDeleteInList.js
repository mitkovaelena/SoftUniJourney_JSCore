let expect = require("chai").expect;

let list ;
 beforeEach(function () {
     list = (function () {
         let data = [];
         return {
             add: function (item) {
                 data.push(item);
             },
             delete: function (index) {
                 if (Number.isInteger(index) && index >= 0 && index < data.length) {
                     return data.splice(index, 1)[0];
                 } else {
                     return undefined;
                 }
             },
             toString: function () {
                 return data.join(", ");
             }
         };
     })();
 })

describe("sortedList", function () {

    it("test list initial value ", function () {
        expect(list.toString()).to.be.equal("")
    })
    //!!!! SL.prototype.hasOwnProperty !!!!
    it('should contain method add', () => {
        expect(list).to.have.property('add');
        expect(typeof list.add).to.equal('function');

    });

    it('should contain method delete', () => {
        expect(list).to.have.property('delete');
        expect(typeof list.delete).to.equal('function');

    });

    it('should contain method toString', () => {
        expect(list).to.have.property('toString');
        expect(typeof list.toString).to.equal('function');

    });

    it("test add num", function () {
        let l = list;
        l.add(5)
        expect(list.toString()).to.be.equal("5")
    })

    it("test add num of any kind", function () {
        let l = list;
        l.add(5)
        l.add("eli")
        l.add(2.14)
        l.add(true)
        expect(list.toString()).to.be.equal("5, eli, 2.14, true")
    })

    it("test remove valid index ", function () {
        let l = list;
        l.add(4)
        l.add(4)
        l.add(4)
        l.delete(2)
        expect(list.toString()).to.be.equal("4, 4")
    })

    it("test list remove from float ", function () {
        let l = list
        expect(list.delete(4.12) ).to.be.undefined
        expect(list.delete("0")).to.be.undefined;

    })

    it("test list remove from empty ", function () {
        let l = list
        l.delete(0)
        l.delete(0)
        expect(list.delete(0) ).to.be.undefined
    })

    it("test list remove -ind ", function () {
        let l = list
        l.add(7)
        expect(list.delete(-3)).to.be.undefined
    })
    it("test list remove bigger ", function () {
        let l = list
        l.add(6)
        expect(list.delete(12) ).to.be.undefined
    })
    it("test list remove string iind ", function () {
        let l = list
        expect(list.delete("elena") ).to.be.undefined
    })

})