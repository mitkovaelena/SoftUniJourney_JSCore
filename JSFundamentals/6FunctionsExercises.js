function insideVolume(input) {
    input=input.map(Number);
    let i = 0;
    for (var j = 0; j < input.length/3; j++) {
       console.log(inVolume(input[i++],input[i++],input[i++]))
    }

    function inVolume(x,y,z){
        let x1 = 10, x2=50,y1=20,y2=80,z1=15,z2=50;
        if(x>=x1 && x<=x2){
            if(y>=y1 && y<=y2){
                if(z>=z1 && z<=z2){
                    return "inside";
                }
            }
        }
        return "outside"
    }
}

function radar([speed,local]) {
    speed=Number.parseInt(speed);
    let limitation = 0;
    switch(local){
        case "motorway": limitation = 130; break;
        case "interstate": limitation = 90; break;
        case "city": limitation = 50; break;
        case "residential": limitation = 20; break;
    }
        console.log(limit(speed, limitation))

    function limit(speed,local){
       if(speed <=limitation) return "";
       else if(speed <=limitation+20) return "speeding";
       else if(speed <=limitation+40) return "excessive speeding";
       else  return "reckless driving";

    }
}

function template(input) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>
<quiz>`);

    for (let i = 0; i < input.length; i++) {
        let question = input[i++];
        let answer = input[i];
        console.log(`<question>
${question}
  </question>
  <answer>
    ${answer}
  </answer>`)
    }
    console.log(`</quiz>`)
}

function cookingNumbers(input) {
    let num=Number.parseInt(input[0]);
    for (let i = 1; i < input.length; i++) {
        switch(input[i]){
            case "chop": num /=2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num++; break;
            case "bake": num *= 3; break;
            case "fillet": num -= num*0.2; break;
        }
        console.log(num);
    }
}

function modifyAverage([number]) {
    let sum = 0;
    let average = 0;
    number = number+"";
        for (let i = 0; i < number.length; i++) {
            let num = Number.parseInt(number[i]);
            sum += num;
        }
        average = sum/number.length;
        while(average <= 5){
            number+="9";
            sum +=9;
            average = sum/number.length;
        }
    console.log(number)
}

function validityChecker([x1,y1,x2,y2]){
    [x1,x2,y1,y2] = [x1,x2,y1,y2].map(Number)
    let distP1 =  calculateDist(x1,y1);
    let distP2 = calculateDist(x2,y2);
    let distP1P2 =calculateDist(x1,y1,x2,y2);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${validDist(distP1)}`)
    console.log(`{${x2}, ${y2}} to {0, 0} is ${validDist(distP2)}`)
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validDist(distP1P2)}`)

    function calculateDist(x1,y1,x2 = 0, y2 = 0) {
     return  Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    }

    function validDist(dist) {
        if (Number.parseInt(dist) == dist) return "valid"
        return "invalid"
    }
}

function treasureLokator(input) {
input = input.map(Number)
    for (let i = 0; i < input.length; i++) {
       let x = input[i++];
        let y = input[i];
        if(x >=1 && x <=3 && y >=1 && y <= 3) console.log("Tuvalu");
        else if(x >=0 && x <=2 && y >=6 && y <= 8) console.log("Tonga");
        else if(x >=8 && x <=9 && y >=0 && y <= 1) console.log("Tokelau");
        else if(x >=5 && x <=7 && y >=3 && y <= 6) console.log("Samoa");
        else if(x >=4 && x <=9 && y >=7 && y <= 8) console.log("Cook");
        else console.log("On the bottom of the ocean");
    }
}

function tripLenght([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);
    dist12 = calculateDist(x1,y1,x2,y2);
    dist13 = calculateDist(x1,y1,x3,y3);
    dist23 = calculateDist(x2,y2,x3,y3);
    if(Math.max(dist12,dist13, dist23) == dist13) console.log(`1->2->3: ${dist12+dist23}`);
    else if(Math.max(dist12,dist13, dist23) == dist12) console.log(`1->3->2: ${dist13+dist23}`);
    else if(Math.max(dist12,dist13, dist23) == dist23) console.log(`2->1->3: ${dist12+dist13}`);


    function calculateDist(x1,y1,x2, y2) {
        return  Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    }
}

function dnaHelix([num]) {
    num = Number(num);
    let seq = "ATCGTTAGGG";
    let j = 0;
    for (let i = 1; i <= num; i++) {
       if(i%4 == 1) console.log(`**${seq[j++]}${seq[j++]}**`)
           if(i%4==2 || i % 4 == 0)console.log(`*${seq[j++]}--${seq[j++]}*`)
               if(i%4==3) console.log(`${seq[j++]}----${seq[j++]}`)
        if(j==10) j = 0;
    }
}

function radioCrystals(input) {
    input = input.map(Number);
    let target = input[0];
    for (var i = 1; i < input.length; i++) {
        let crystal = input[i];
        console.log(`Processing chunk ${crystal} microns`)
        let cutCount =0;
        while(crystal/4 >= target) {  crystal /= 4;  cutCount++ }
        if(cutCount != 0) {
            console.log(`Cut x${cutCount}`)
            console.log("Transporting and washing");
            crystal = Math.floor(crystal);
        }
        let lapCount =0;
        while(crystal-crystal*0.2 >= target) {  crystal -= crystal*0.2;  lapCount++ }
        if(lapCount != 0) {
            console.log(`Lap x${lapCount}`)
            console.log("Transporting and washing");
            crystal = Math.floor(crystal);
        }
        let grindCount =0;
        while(crystal-20 >= target) {  crystal -= 20;  grindCount++ }
        if(grindCount != 0) {
            console.log(`Grind x${grindCount}`)
            console.log("Transporting and washing");
            crystal = Math.floor(crystal);
        }
        let etchCount =0;
        while(crystal-2 >= target-1) {  crystal -= 2;  etchCount++ }
        if(etchCount != 0) {
            console.log(`Etch x${etchCount}`)
            console.log("Transporting and washing");
            crystal = Math.floor(crystal);
        }

        if(crystal < target) {
            crystal++
            console.log(`X-ray x1`)
        }
       console.log(`Finished crystal ${target} microns`)
    }
}

radioCrystals([1375, 50000])
