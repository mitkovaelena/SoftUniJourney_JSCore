function objectIterator(obj){
    let keys = (Object.keys(obj)).sort()
    let ind = keys.length-1;
    return{
        next: function(){
            if(ind>=0)
                return {value: keys[ind--], done: false}
            else
                return {done: true}
        }
    }
}

let obj = {age: 27, name: "pesho", book: "Lord of the Rings"};
let iterator = objectIterator(obj);
while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value);
}
