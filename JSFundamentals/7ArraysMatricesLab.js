function sumFirsLast(input) {
    input=input.map(Number);
    console.log(input[0]+input[input.length-1])
}

function evenPosition(input) {
    let even = input.filter((x,i) => i%2==0).join(" ");
    console.log(even);
}

function positiveNegative(input) {
    input=input.map(Number);
    let arr = [];
    for(let i of input){
        if(i<0) arr.unshift(i);
        else arr.push(i);
    }
    console.log(arr.join("\n"));
}

function firstLastKElements(input) {
    let k = Number(input.shift());
    let arr1 = input.slice(0,k)
    let arr2= input.slice(input.length-k,k+1);
    console.log(arr1.join(" "));
    console.log(arr2.join(" "));
}

function lastKNums(input) {
    let len = Number(input[0]);
    let sumLen = Number(input[1]);
    let arr = [];
    let sum =1;
    let start = 0;
    for (let i = 0; i < len; i++) {
       start = Math.max(0, i-sumLen+1);
        arr.push(sum);
        sum = 0;
        for (let j = start; j <= i; j++) {
            sum +=arr[j];
        }
    }
    console.log(arr.join(" "));
}

function oddPositions(input) {
    let odd = input.filter((x,i) => i%2==1).map(x=>x*2).reverse().join(" ");
    console.log(odd);
}

function smallest2(input) {
    input = input.sort((a,b) => a-b).slice(0,2).join(" ");
    console.log(input);
}

function biggestElement(input) {
    let max = -Infinity;
    for(let i of input){
        let row = i.split(" ").map(Number).sort((a,b)=>(a-b)).pop();
        max = Math.max(max, row)
    }
    console.log(max);
}

function diagonalSums(input) {
    let dia1 = 0;
    let dia2 = 0;

    for(let row in input){
        let rowArray= input[row].split(" ").map(Number)
        dia1 += Number(rowArray[row]);
        dia2 += Number(rowArray[rowArray.length-1-row]);
    }
    console.log(dia1 + " " + dia2)
}

function equalNeghbours(input) {
    let count = 0;
    let matrix = input.map(row => row.split(" "));

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row+1]){
                if(matrix[row][col]==matrix[row+1][col]) count++;
            }
            if(matrix[row][col+1]){
                if(matrix[row][col]==matrix[row][col+1]) count++;
            }
        }
    }
    console.log(count)
}

equalNeghbours(['2 2 5 7 4',
                '4 0 5 3 4',
                '2 5 5 4 2']
)