"use strict";

function sumNumbers(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    return a+b+c;
}

function calculateSumVAT(input){
    let sum = 0;
    for(let i = 0; i<input.length; i++) {
        sum = sum + Number(input[i]);
    }
    let vat = 0.20*sum;
    let total = sum *1.20;
    console.log('sum = ' + sum);
    console.log('VAT = ' + vat);
    console.log('total = ' + total);
}

function letterOccInStr([str, letter]){
    let occ = 0;
    for(let i = 0; i<str.length; i++) {
        if(str[i]==letter)
            occ++;
    }
    console.log(occ);
}

function filterByAge([minAge, name1, age1, name2, age2]){
    let person1 = {name: name1, age: Number(age1)};
    let person2 = {name: name2, age: Number(age2)};
   if(person1.age >= minAge)
       console.log(`{ name: '${name1}', age: ${age1} }`)
   if(person2.age >= minAge)
    console.log(`{ name: '${name2}', age: ${age2} }`)
}

function string1toN(input){
    let str = "";
    for(let i = 1; i<=input; i++) {
        str += i;
    }
    console.log(str);
}

function figureArea([w,h,W,H]){
let [s1,s2,s3] = [W*H, w*h, Math.min(w,W)* Math.min(h,H)]
    console.log(s1+s2-s3)
}

function nextDay([year, month, day]) {
    let date = new Date(year, month-1, day)   //dafuq?
    let oneDay= 24*60*60*1000 // miliseconds
    let nextDate = new Date(date.getTime()+oneDay)
    console.log(`${nextDate.getFullYear()}-${nextDate.getMonth()+1}-${nextDate.getDate()}`)
}

function distanceBetweenPoints([x1, y1, x2, y2]) {
    let dist = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    console.log(dist)
}

nextDay(['17','3','1996']);