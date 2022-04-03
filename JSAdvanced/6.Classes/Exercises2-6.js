class Stringer{
    constructor(innerString, innerLength){
        [this.innerString, this.innerLength] = [innerString , innerLength]
    }
    increase(val){
        this.innerLength +=val;
    }
    decrease(val){
        this.innerLength = Math.max(0, this.innerLength-val);
    }
    toString(){
        if(this.innerLength>=this.innerString.length)
        return this.innerString;
        else{
            let newInnerStr = this.innerString.substr(0,this.innerLength) + "..."
            return newInnerStr;
        }
    }
}

let ExtensibleClass= (function () {
    let uniqueId = 0;

    return class Extensible{
    constructor(){
        this.id = uniqueId++;
    }
    extend(template) {
        for (let key of Object.keys(template)) {              // == for(let key in template)
            if (typeof template[key] != "function")
                this[key] = template[key];
            else {
                Object.getPrototypeOf(this)[key] = template[key]
            }
        }
    }
}
})();


 let linkedList  = (function(){
    return class linkedList {
        constructor(){
            this.storage = [];
            this.size  = 0;
        }
         add(n) {
             this.storage.push(n)
             this.storage = this.storage.sort((a,b) =>a-b)
             this.size=this.storage.length;
         }
         remove(ind) {
            if(ind>= 0 && ind<this.storage.length) {
                this.storage.splice(ind,1);
                this.storage = this.storage.sort((a,b) =>a-b)
                this.size=this.storage.length;

            }
            else throw new Error;
        }
         get(ind) {
            if(ind>= 0 && ind<this.storage.length)
                return this.storage[ind]
            else throw new Error;
        }
    };
})();

let list = new linkedList();
console.log(list.hasOwnProperty('size'));
list.add(5);
list.add(3);
console.log(list.size)

list.remove(0)
console.log(list.size)
console.log(list.get(0));