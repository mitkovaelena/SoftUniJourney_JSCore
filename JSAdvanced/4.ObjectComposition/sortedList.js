function generateLinkedList() {
    return (function () {
        let storage = [];

        function add(n) {
            storage.push(n)
            sortArr();
        }

        function remove(ind) {
            if(ind>= 0 && ind<storage.length) {
                storage.splice(ind,1);
                sortArr();
            }
            else throw new Error;
        }

        function get(ind) {
            if(ind>= 0 && ind<storage.length)
                return storage[ind]
            else throw new Error;
        }

        function getSize() {
            return storage.length;
        }

        function sortArr() {
            storage = storage.sort((a,b) =>a-b)
        }

        let a = {add, remove, get}
        a.__defineGetter__("size", getSize)
        return a;
    })();
}

let list = generateLinkedList();
console.log(list.hasOwnProperty('size'));
list.add(5);
list.add(3);
list.remove(0)
console.log(list.get(0));