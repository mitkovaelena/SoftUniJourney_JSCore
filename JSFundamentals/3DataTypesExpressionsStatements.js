function helloJS([name]) {
        console.log(`Hello, ${name}, I am JavaScript!`)
}

function areaPerimeter([side1,side2]) {
    console.log(Number(side1)*Number(side2));
    console.log(2*Number(side1)+2*Number(side2))
}

function distOverTime([v1,v2,t]) {
    let speed1 = Number(v1)/3600;
    let speed2 = Number(v2)/3600;
    console.log(Math.abs(speed1*Number(t)-speed2*Number(t))*1000);
}

function dist3D([x1,y1,z1,x2,y2,z2]) {
   console.log(Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2)));
}

function gradsToDegrees([grads]) {
    let convertGradToDeg = Number(grads) / 400*360;
    convertGradToDeg = convertGradToDeg % 360;

    if(convertGradToDeg<0){
        convertGradToDeg+= 360;
    }
        console.log(convertGradToDeg)
}

function compoundInterest([p,i,n,t]) {
    let f = i/100;
    f/=(12/n);
    f +=1;
    f = Math.pow(f,12/n*t);
    f*=p;
    console.log(parseFloat(f).toFixed(2))
}

function rounding([num,prec]){
    if(prec>15)prec=15;
    let pieces = num.split('.');
    if(prec> pieces[1].length) prec = pieces[1].length
    console.log(parseFloat(Number(num)).toFixed(prec))
}

function feetToInches([inches]){
    let feet = 0;
  while(inches>=12){
      feet++;
      inches-=12;
  }
    console.log(`${feet}'-${inches}"`)
}

function nowPlaying([track, artist, length]){
    console.log(`Now Playing: ${artist} - ${track} [${length}]`)
}


function composingTag([location, text]){
    console.log(`<img src="${location}" alt="${text}">`)
}

function binaryToDecimal([binary]){
    let decimal = parseInt(binary, 2)
    console.log(decimal)
}

function assignProp([firstKey, firstValue, secondKey, secondValue, thirdKey, thirdValue]) {
    let relult =  {
        [firstKey]: firstValue,
        [secondKey]: secondValue,
        [thirdKey]: thirdValue
    }
    console.log(result)
}

function lastMonth([day, month, year]) {
    let date = new Date(year, month-1, 1)   // month [0...11]
    let oneDay= 24*60*60*1000 // miliseconds
    let nextDate = new Date(date.getTime()-oneDay)
    console.log(`${nextDate.getDate()}`)
}

lastMonth(['17','3','1996']);