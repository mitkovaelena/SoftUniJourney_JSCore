function* fibonacciGenerator() {
    yield 1;   //first call
    yield 1;   //second call
    let first = 1;
    let second = 1;

    while (true) {
        let temp = first + second;
        first = second;
        second = temp;
        yield temp;  //next call
    }
}

let fib = fibonacciGenerator()
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())