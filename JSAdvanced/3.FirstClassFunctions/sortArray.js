function sortArray(arr, option) {
    let sortAsc = (a, b) => a - b;
    let sortDesc = (a, b) => b - a;
    let sortStrategies = {
        asc: sortAsc,
        desc: sortDesc
    };
    return arr.sort(sortStrategies[option]);
}

function argumentInfo(input){
    let types = [];
    for(let i =0;i<arguments.length;i++) {
        let type = typeof arguments[i];
        if (types[type]) types[type]++
        else types[type] = 1
        console.log(type + ": " + arguments[i])
    }

    let sortedTypes = []
    for(let t in types)
    sortedTypes.push([t, types[t]])
    
    sortedTypes.sort((a,b)=>b[1]-a[1])
    for(let i of sortedTypes) {
        console.log(i[0] + " = " + i[1])
    }
}

let functionalSum = (function () {
    let total = 0;
    return function sum(a) {
        total += a;
        sum.toString = () => total;
        return sum;
    }
})();

function euclidisAlgoritm(a, b) {
    let bigger = Math.max(a,b)
    let smaller = Math.min(a,b)
    let mod = 0;
    while(true){
        mod = bigger%smaller;
        if(mod == 0) return smaller
        bigger=smaller;
        smaller=mod;
    }
}

console.log(euclidisAlgoritm(252, 105));
