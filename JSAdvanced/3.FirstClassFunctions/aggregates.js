function aggregates(input){
    console.log("Sum = " + aggregator(input, ( (a,b) => (a+b))))
    console.log("Min = " + aggregator(input, ( (a,b) => Math.min(a,b))))
    console.log("Max = " + aggregator(input, ( (a,b) => Math.max(a,b))))
    console.log("Product = " + aggregator(input, ( (a,b) => (a*b))))
    console.log("Join = " + aggregator(input, ( (a,b) => (a+""+b))))

    function aggregator(arr, func) {
        let result = arr.shift();
        let len = arr.length
        for (let i = 0; i < len; i++) {
            result = func(result, arr.shift())
        }
        return result;
    }
}

function maxNumberInArray(input){
  console.log(Math.max.apply(null, input))
}

maxNumberInArray([2,23,5,7])