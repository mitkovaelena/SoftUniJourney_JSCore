let expect = require("chai").expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length || !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe("sortedList", function () {

    it("test list initial value ", function () {
        let list = createList();
        expect(list.data).to.be.empty
    })
    it("test list initial value ", function () {
        let list = createList();
        expect(list.toString()).to.be.equal("")
    })
    //!!!! SL.prototype.hasOwnProperty !!!!
    it('should contain method add', () => {
        let list = createList();
        expect(list).to.have.property('add');
        expect(typeof list.add).to.equal('function');

    });

    it('should contain method shiftLeft', () => {
        let list = createList();
        expect(list).to.have.property('shiftLeft');
        expect(typeof list.shiftLeft).to.equal('function');

    });

    it('should contain method shiftRight', () => {
        let list = createList();
        expect(list).to.have.property('shiftRight');
        expect(typeof list.shiftRight).to.equal('function');

    });

    it('should contain method swap', () => {
        let list = createList();
        expect(list).to.have.property('swap');
        expect(typeof list.swap).to.equal('function');

    });

    it('should contain method toString', () => {
        let list = createList();
        expect(list).to.have.property('toString');
        expect(typeof list.toString).to.equal('function');

    });



    it("test add", function () {
        let list = createList();
        list.add(5)
        expect(list.toString()).to.be.equal("5")
    })

    it("test add", function () {
        let list = createList();
        list.add(5)
        list.add("eli")
        list.add(2.14)
        list.add(true)
        list.add({a:5,b:6})
        expect(list.toString()).to.be.equal("5, eli, 2.14, true, [object Object]")
    })

    it("test add", function () {
        let list = createList();
        list.add(4)
        list.add()
        list.add(6)
        expect(list.toString()).to.be.equal("4, , 6")
    })


    it("test shiftLeft", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        list.shiftLeft()
        expect(list.toString()).to.be.equal("4, 6, 5")
    })

    it("test shiftLeft", function () {
        let list = createList();
        list.add(5)
        list.shiftLeft()
        expect(list.toString()).to.be.equal("5")
    })

    it("test shiftLeft", function () {
        let list = createList();
        list.shiftLeft()
        expect(list.toString()).to.be.equal("")
    })

    it("test shiftRight", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        list.shiftRight()
        expect(list.toString()).to.be.equal("6, 5, 4")
    })

    it("test shiftRight", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        list.shiftRight()
        list.shiftLeft()
        expect(list.toString()).to.be.equal("5, 4, 6")
    })


    it("test shiftRight", function () {
        let list = createList();
        list.shiftRight()
        expect(list.toString()).to.be.equal("")
    })

    it("test shiftRight", function () {
        let list = createList();
        list.add(5)
        list.shiftRight()
        expect(list.toString()).to.be.equal("5")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(0,2)).to.be.true
        expect(list.toString()).to.be.equal("6, 4, 5")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(2,0)).to.be.true
        expect(list.toString()).to.be.equal("6, 4, 5")
    })

    it("test swap", function () {
        let list = createList();
        list.add("dj")
        list.add(4)
        list.add(6)
        expect(list.swap(0,2)).to.be.true
        expect(list.toString()).to.be.equal("6, 4, dj")
    })

    it("test swap", function () {
        let list = createList();
        list.add("dj")
        list.add(4)
        list.add(6)
        expect(list.swap(2,1)).to.be.true
        expect(list.toString()).to.be.equal("dj, 6, 4")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(0,3)).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(3,0)).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(-1,2)).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(2,-1)).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(1,1)).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap("eli",2)).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(3,"eli")).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(4.6,"elena")).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap("elena","fg")).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap(2,1.5)).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        expect(list.swap()).to.be.false
        expect(list.toString()).to.be.equal("5, 4, 6")
    })

    it("test swap", function () {
        let list = createList();
        list.add(5)
        list.add()
        list.add(6)
        expect(list.swap(1,0)).to.be.true
        expect(list.toString()).to.be.equal(", 5, 6")
    })

    it("test toString", function () {
        let list = createList();
        list.add(5)
        list.add(4)
        list.add(6)
        let arr=[];
        arr.push(5)
        arr.push(4)
        arr.push(6)
        expect(list.toString()).to.be.equal(arr.join(", "))
    })

})
