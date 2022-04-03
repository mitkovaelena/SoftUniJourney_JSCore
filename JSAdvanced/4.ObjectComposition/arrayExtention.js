let arrayExtention = (function (){

    Array.prototype.last = function () {
        if (this.length > 0) return this[this.length - 1]
        else return [];
    }
        Array.prototype.skip = function (n) {
            if (this.length > n) return this.slice(n, this.length)
            else return [];
    }

    Array.prototype.take = function (n) {
      return this.slice(0, Math.min(n, this.length))
    }

    Array.prototype.sum = function () {
        if (this.length > 0) return this.reduce((a,b)=> a+b)
        else return [];
    }

    Array.prototype.average = function () {
        if (this.length > 0) return (this.reduce((a,b)=> a+b)/this.length)
        else return [];
    }
})();

let myArr = [1,2]

//console.log(myArr.last())
//console.log(myArr.skip(3))
//console.log(myArr.take(3))
//console.log(myArr.sum())
//console.log(myArr.average())

function generateExtensibleObject() {
    let myObj = {};

    myObj.extend = function (template) {
        for (let key of Object.keys(template)) {              // == for(let key in template)
            if (typeof template[key] != "function")
                myObj[key] = template[key];
            else {
                Object.getPrototypeOf(myObj)[key] = template[key]
            }
        }
    };
    return myObj;
}


//let result = generateExtensibleObject();
let template = {
    extensionMethod: function () {
        return 5 + 6
    },
    extensionProperty: 'someString'
};
//result.extend(template);
//console.log(result)


let stringExtention = (function (){

    String.prototype.ensureStart = function (piece) {
        if (!this.startsWith(piece)) return piece + this.toString()
        else return this.toString();
    }

    String.prototype.ensureEnd = function (piece) {
        if (!this.endsWith(piece)) return this.toString() + piece;
        else return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.toString() == "";
    }

    String.prototype.truncate = function (len) {
        let str = this.toString();
        while (true) {
            if (str.length > len) {
                str = str.split(" ")
                if (str.length > 1) {
                    str.pop();
                    str = str.join(" ") + "..."
                }
                else if (str[0].length >= 4)
                    str = str[0].slice(0, str[0].length - 4) + "..."
                else str = ".".repeat(len)
            }
            else return str.toString();
        }
    }

    String.format = function (str, ...args) {
        for(let i = 0; i < args.length; i++) {
            str = str.replace('{' + (i) + '}', args[i])
        }
        return str;
    }

})();

let str = 'my string'
str = str.ensureStart('my')
console.log(str)
str = str.ensureStart('hello ')
console.log(str)
str = str.truncate(16)
console.log(str)
str = str.truncate(14)
console.log(str)
str = str.truncate(8)
console.log(str)
str = str.truncate(4)
console.log(str)
//str = str.truncate(2)
//console.log(str)
str = String.format('The {0} {1} fox','quick', 'brown')
console.log(str)
str = String.format('jumps {0} {1}','dog')
console.log(str)
console.log(str.isEmpty())
str = "";
console.log(str.isEmpty())






