function* lookAndSayGenerator(f) {
    let first = f+""
    let seq = 1;
    let next = "";
    while (true) {
        for (let i = 0; i < first.length; i++) {
               if(first[i+1] && first[i] == first[i+1]){
                   seq++;
               }
            else{
                   next += seq;
                   next += first[i]
                   seq = 1;
               }
        }
        first = next
        next = ""
        yield first;
    }
}

let lookSequence = lookAndSayGenerator(113);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
