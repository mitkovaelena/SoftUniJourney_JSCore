function triangleOfStars(input) {
    for (let i = 0; i <= input; i++) {
       printStars(i)
    }
    for (let i = input-1; i > 0; i--) {
        printStars(i)
    }

    function printStars(count){
        console.log('*'.repeat(count))

    }
}

function squareOfStars(n) {
    for (let i = 0; i < n; i++) {
     console.log('*' + ' *'.repeat(n-1))
    }
}

function isPalindrome([str]) {
    let revStr = str.split("").reverse().join("");
if( revStr == str)
    console.log(true);
else
    console.log(false)
}

function dayOfWeek([day]) {
day = day.toLowerCase()
    switch (day) {
        case "monday":
            console.log("1")
            break;
        case "tuesday":
            console.log("2")
            break;
        case "wednesday":
            console.log("3")
            break;
        case "thursday":
            console.log("4")
            break;
        case "friday":
            console.log("5")
            break;
        case "saturday":
            console.log("6")
            break;
        case "sunday":
            console.log("7")
            break;
        default:
            console.log("error");
            return;
    }
}

function calculator([a,b, op]) {
    [a,b] = [a,b].map(Number)
    let calc = function (a,b,op) { console.log( op(a,b) )}   //funkciq priema kato argument dr funkciq
    let add = function (a,b) { return a+b }
    let substract = function (a,b) { return a-b }
    let multyply = function (a,b) { return a*b }
    let divide = function (a,b) { return a/b }

    switch (op){
        case "+" : return calc(a,b,add);
        case "-" : return calc(a,b,substract);
        case "*" : return calc(a,b,multyply);
        case "/" : return calc(a,b,divide);
    }
}

function aggregateElements(input) {
    let elements = input.map(Number);
    function aggregate(elems, initVal, func){
        let val=initVal;
        for (var i = 0; i < elems.length; i++) {
            val = func(val, elems[i])
        }
        console.log(val);
    }

    aggregate(elements, 0, (a,b)=>a+b);
    aggregate(elements,0,(a,b)=> (a)+(1/b));
    aggregate(elements, "", (a,b)=>a+b);
}

function wordsUpper([input]) {
    input = input.toUpperCase();
    let words = extractWords();
    words= words.filter(x => x != "");
    console.log(words.join(", "));

    function extractWords(){
       return input.split(/\W+/);   //nested Functions can use outside variables
    }
}

wordsUpper(['Hi, how are you?'])