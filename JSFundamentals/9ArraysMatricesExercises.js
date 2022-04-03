function printArrayByDelimiter(input) {
    let delimiter = input.pop();
    console.log(input.join(delimiter));
}

function printEveryNElement(input) {
    let n = Number(input.pop());
    for (let i = 0; i <input.length; i+=n) {
        console.log(input[i]);
    }
}

function addRemoveElements(input) {
    let arr = [];
    for (let i = 0; i <input.length; i++) {
       switch(input[i]){
           case "add": arr.push(i+1); break;
           case "remove": arr.pop();break;
       }
    }
    if(arr.length==0) console.log("Empty")
    else(console.log(arr.join("\n")))
}

function rotateArray(input) {
    let n = Number(input.pop());
    let arr = input;
    let temp;
    n = n%(input.length)
    for (let i = 0; i < n; i++) {
       temp = arr.pop();
       arr.unshift(temp)
    }
    console.log(arr.join(" "))
}

function extractIncreasingSequence(input) {
    input=input.map(Number)
    let last = -Infinity;
    for (let i = 0; i <input.length; i++) {
       if(last <= input[i]) {
           console.log(input[i])
           last = input[i]
       }
    }
}

function sortBy2Criteria(input) {
    input.sort().sort((a,b)=>a.length-b.length);

   // let cmp = function(a, b) {
   //     if (a > b) return +1;
   //     if (a < b) return -1;
   //     return 0;
   // }
   // input.sort(function(a, b) { return cmp(a.length,b.length) || cmp(a,b)})

    console.log(input.join("\n"))
}

function magicMatrices(input){
    let matrix = input.map(row => row.split(" "))
    let sum = matrix[0].map(Number).reduce(function(a,b){return a+b;});
    let sumCol =0;
    for (let row = 0; row < matrix.length; row++) {
        if(sum !== matrix[row].map(Number).reduce(function(a,b){return a+b;})) {
            console.log("false")
            return;
        }
    }
    for (let col = 0; col < matrix.length; col++) {
        for (let row = 0; row < matrix.length; row++) {
           sumCol+=Number(matrix[row][col])
        }
        if (sum !== sumCol) {
            console.log("false");
            return;
        }
        else sumCol=0;
    }
    console.log("true");
}

function spiralMatrix([dimentions]){
dimentions = dimentions.split(" ");
    let rows = dimentions[0];
    let cols = dimentions[1];
    let matrix = [];
    let count = 1;
    let top = 0;
    let down = rows - 1;
    let left = 0;
    let right = cols - 1;

    while(true)
    {
        // Print top row
        for(let j = left; j <= right; ++j) {
            if(!matrix[top])
                matrix[top] = [];
            matrix[top][j] = count++;
        }
        top++;
        if(top > down || left > right) break;

        //Print the rightmost column
        for(let i = top; i <= down; ++i) {
            if(!matrix[i])
                matrix[i] = [];
            matrix[i][right]= count++;
        }
        right--;
        if(top > down || left > right) break;

        //Print the bottom row
        for(let j = right; j >= left; --j) {
            if(!matrix[down])
                matrix[down] = [];
            matrix[down][j]= count++;
        }
        down--;
        if(top > down || left > right) break;

        //Print the leftmost column
        for(let i = down; i >= top; --i) {
            if(!matrix[i])
                matrix[i] = [];
            matrix[i][left] = count++;
        }
        left++;
        if(top > down || left > right) break;
    }

    matrix = matrix.map(x => x.join(" "));
    console.log(matrix.join("\n"))
}

function diagonalAttack(input) {
    let dia1 = 0;
    let dia2 = 0;
    let rowArray = [];
    
    for(let row in input){
        rowArray= input[row].split(" ").map(Number)
        dia1 += Number(rowArray[row]);
        dia2 += Number(rowArray[rowArray.length-1-row]);
    }

    if(dia1==dia2){
        for(let row in input){
             rowArray= input[row].split(" ").map(Number)
            for (let col = 0; col < rowArray.length; col++) {
                if(col != row && col != (rowArray.length - 1 - row))
                    rowArray[col] = dia1;
            }
            input[row] = rowArray.join(" ")
        }
    }
        console.log(input.join("\n"))
}

function orbit([dimentions, coordinates]){
    dimentions = dimentions.split(" ");
    let rows = dimentions[0];
    let cols = dimentions[1];
    coordinates = coordinates.split(" ");
    let x = coordinates[0];
    let y = coordinates[1];
    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
        for (let col = 0; col < cols; col++) {
        matrix[row][col] = Math.max(Math.abs(col-y) ,Math.abs(row-x))+1
        }
    }
    matrix = matrix.map(x => x.join(" "));
    console.log(matrix.join("\n"))
}

orbit(['6 6', '1 5'])