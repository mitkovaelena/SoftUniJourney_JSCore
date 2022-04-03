function* randomGenerator(f) {
    let first = (f*f)%(4871*7919)
    yield first % 100;
    while(true){
        let next = (first*first)%(4871*7919);
        first = next;
         yield next % 100
    }
}

let rnd = randomGenerator(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}
