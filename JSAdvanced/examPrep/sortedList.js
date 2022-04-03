let expect = require("chai").expect;

class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe("sortedList", function () {

    it("test list initial value ", function () {
        let actual = new SortedList
        expect(actual.list).to.be.empty
    })
     //!!!! SL.prototype.hasOwnProperty !!!!
    it('should contain method size', () => {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
    });
    it('should contain method add', () => {
        expect(SortedList.prototype).to.have.property('add');
    });

    it('should contain method remove', () => {
        expect(SortedList.prototype).to.have.property('remove');
    });

    it('should contain method get', () => {
        expect(SortedList.prototype).to.have.property('get');
    });


    it("test list add 1 ", function () {
        let actual = new SortedList
        actual.add(6)
        expect(actual.get(0)).to.be.equal(6)
    })
    it("test list add more ", function () {
        let actual = new SortedList
        actual.add(6)
        actual.add(3)
        actual.add(1)
        actual.add(7)
        expect(actual.get(0)).to.be.equal(1)
    })
    it("test list add more ", function () {
        let actual = new SortedList
        actual.add(-6)
        actual.add(-3)
        actual.add(-1)
        actual.add(-7)
        expect(actual.get(-7)).to.be.equal(1)
    })
    it("test list add more ", function () {
        let actual = new SortedList
        actual.add(6.4)
        actual.add(3.3)
        actual.add(1.1)
        actual.add(1.2)
        expect(actual.get(0)).to.be.equal(1.1)
    })
    it("test list remove valid ", function () {
        let actual = new SortedList
        actual.add(6)
        actual.add(3)
        actual.add(1)
        actual.remove(1)
        expect(actual.get(1)).to.be.equal(6)
    })
    it("test list get from empty ", function () {
        let actual = new SortedList
        expect(() => actual.get(6) ).to.throw(Error)
    })
    it("test list get from -ind ", function () {
        let actual = new SortedList
        actual.add(5)
        expect(() => actual.get(-6) ).to.throw(Error)
    })
    it("test list get from incorect ind ", function () {
        let actual = new SortedList
        actual.add(5)
        expect(() => actual.get(1) ).to.throw(Error)
    })
    it("test list remove from empty ", function () {
        let actual = new SortedList
        expect(() => actual.remove(6) ).to.throw(Error)
    })
    it("test list remove empty ", function () {
        let actual = new SortedList
        actual.add(1)
        actual.remove(0)
        expect(() => actual.remove(0) ).to.throw(Error)
    })
    it("test list remove -ind ", function () {
        let actual = new SortedList
        actual.add(7)
        expect(() => actual.remove(-3) ).to.throw(Error)
    })
    it("test list remove bigger ", function () {
        let actual = new SortedList
        actual.add(6)
        expect(() => actual.remove(1) ).to.throw(Error)
    })
    it("test list remove -ind ", function () {
        let actual = new SortedList
        expect(() => actual.remove(-6) ).to.throw(Error)
    })
    it("test list size ", function () {
        let actual = new SortedList
        actual.add(6)
        actual.add(3)
        actual.add(1)
        actual.remove(1)
        expect(actual.size).to.be.equal(2)
    })
    it("test list size ", function () {
        let actual = new SortedList
        expect(actual.size).to.be.equal(0)
    })
})