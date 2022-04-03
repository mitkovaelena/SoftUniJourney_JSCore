function XRemoval(input){
let matrix = [];
    let indexes = [];
    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].toLowerCase().split("")
        input[i] = input[i].split("")
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let val = matrix[row][col]
           if(col + 2 < matrix[row].length && row + 2 < matrix.length) {
               if( matrix[row][col] == matrix[row][col+2] && matrix[row][col] == matrix[row+1][col+1]
               && matrix[row][col] == matrix[row+2][col] && matrix[row][col] == matrix[row+2][col+2])
               {
                   let ind1 = [row, col]
                   let ind2 = [row, col+2]
                   let ind3 = [row+1, col+1]
                   let ind4 = [row+2, col]
                   let ind5 = [row+2, col+2]
                   indexes.push(ind1,ind2,ind3,ind4,ind5);
               }
           }
        }
    }


    for(let point of indexes){
        let r = point[0];
        let c = point[1];
        input[r][c] = "";
    }

    for (let i = 0; i < input.length; i++) {
       console.log(input[i].join(""))
    }

}

XRemoval(["abnbjs",
    "xoBab",
    "Abmbh",
    "aabab",
    "ababvvvv"])