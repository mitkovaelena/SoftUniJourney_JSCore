function multiplyNums([num1, num2]) {
    console.log(num1*num2)
}

function boxesBottles([bottles, boxes]) {
    console.log(Math.ceil(bottles/boxes))
}

function isLeapYear([year]) {
    console.log(year % 400 == 0 ? "yes" : year % 4 == 0 ? year % 100 != 0 ? "yes" : "no" : "no")
}

function circleArea([radius]) {
    console.log(Math.PI*radius*radius)
    console.log(parseFloat(Math.PI*radius*radius).toFixed(2))
}

function triangleArea([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number)
    let halfPerimeter = (a+b+c)/2;
    console.log(Math.sqrt(halfPerimeter*(halfPerimeter-a)*(halfPerimeter-b)*(halfPerimeter-c)))
}


function cone([radius, height]) {
    console.log("volume = "+ Math.round(height*Math.PI*radius*radius/3*10000)/10000)
    console.log(`area = ${Math.round((Math.sqrt(height*height+radius*radius)*Math.PI*radius+Math.PI*radius*radius)*10000)/10000}`)
}

function oddEven([num]) {
   num < 0 ? num = num*(-1) : num ;
    console.log(num % 2 == 0 ? "even" : num % 2 == 1 ? "odd" : "invalid")
}

function fruitOrVeg([product]) {
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley", ""];
    for (let i = 0; i < 7; i++)
    {
        if (product == fruits[i])
        {
           console.log("fruit");
            return;
        }
        else if (product == vegetables[i])
        {
            console.log("vegetable");
            return;
        }
    }
   console.log("unknown");
}

function printNums([n]) {
    console.log("<ul>")
    let color;
for(let i = 1; i<=n; i++){
    i%2 == 0 ? color = "blue" : color="green";
    console.log(`<li><span style="color:${color}">${i}</span></li>`)
}
    console.log("</ul>")
}

function chessboard([n]) {
    console.log('<div class="chessboard">')
    let color;
    for (let i = 0; i < n; i++) {
        console.log('  <div>')
        for (let j = 0; j < n; j++) {
            i%2 == 0 ^ j%2==0 ? color = "white" : color="black";
            console.log(`    <span class="${color}"></span>`)
        }
        console.log("  </div>")
    }
    console.log("</div>")
}

function binaryLogarithm(nums) {
    for(let num of nums)
    console.log(Math.log2(num))
}

    function isPrime(num) {
        let prime = true;
        for (let d = 2; d <=
        Math.sqrt(num); d++) {
            if (num % d == 0) {
                prime = false;
                break;
            }
        }
        console.log(prime && (num > 1))
    }

isPrime([-81])