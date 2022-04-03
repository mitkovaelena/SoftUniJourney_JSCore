function reverseIterator(arr){
    let ind = arr.length-1
    return{
        next: function(){
        if(ind>=0)
        return {value: arr[ind--], done: false}
            else
            return {done: true}
        }
    }
}

let iterator = reverseIterator([10, 20, 30]);
while (true) {
    let item = iterator.next();
    if (item.done) break;
    console.log(item.value);
}

function reverseIterable(arr){
    let ind = arr.length-1
    return{
        [Symbol.iterator]: function () { return this},
        next: function(){
            if(ind>=0)
                return {value: arr[ind--], done: false}
            else
                return {done: true}
        }
    }
}

for (let item of reverseIterable([10, 20, 30])) {
    console.log(item);
}

function* reverseGenerator(arr){
    let ind = arr.length-1
            while(ind>=0)
                yield arr[ind--]
}

let arr = [10, 20, 30];
for (let x of reverseGenerator(arr))
    console.log(x);

function* iterateHTMLTags(str) {
    let regex = /<[^>]+>/g
    let match;
    while (match = regex.exec(html)) {
        let tag = match[0];
        yield tag;
    }
}

let html = `<html><body>
<p align='center'><span lang='en'>Hello</span>, HTML
</p> Bye, bye</body></html>`;
for (let tag of iterateHTMLTags(html)) {
    console.log(tag);
}


