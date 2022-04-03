function rosettaStone(input) {
    let n = Number(input.shift());
    let templateMatrix = []
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(" ").map(Number);

        if(i<n)
        templateMatrix.push(input[i]);
    }

    let m = templateMatrix[0].length;

    for (let i = 0; i < n; i++) {
       input.shift();
    }

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
               let modR = row%n;
               let modC = col%m

            let num = input[row][col] + templateMatrix[modR][modC];
            num %= 27;
            if(num==0) num = " ";
            else num = String.fromCharCode(65+num-1);

            input[row][col] = num;
        }
    }
    input = input.map(x => x.join(""));
    console.log(input.join(""))
}

rosettaStone([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
)