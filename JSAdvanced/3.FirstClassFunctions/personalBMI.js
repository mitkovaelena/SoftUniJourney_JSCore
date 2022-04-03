function personalBMI(input) {
    let name = arguments[0];
    let age = arguments[1];
    let weight = arguments[2];
    let height = arguments[3];
    let bmi = weight/(height/100*height/100);
    let status = "";

   if(bmi<18.5) status = "underweight"
   else if(bmi<25) status = "normal"
   else if(bmi<30) status = "overweight"
   else status = "obese"

    let person = {}
person.name = name;
    person.personalInfo = {}
    person.personalInfo.age = age;
    person.personalInfo.weight = weight;
    person.personalInfo.height = height;
person.BMI = Math.round(bmi);
person.status = status;
    if(status=="obese") person.recommendation = 'admission required'

    return person
}

let vectorMath = (function(args){
    return {
        add: (a,b) => [(a[0]+b[0]),(a[1]+b[1])],
        multiply: (a,b) => [(a[0]*b),(a[1]*b)],
        length: (a) => Math.sqrt(a[0]*a[0] + a[1]*a[1]),
        dot: (a,b) => (a[0]*b[0])+(a[1]*b[1]),
        cross: (a,b) => (a[0]*b[1] - b[0]*a[1])
    }
})()

console.log(vectorMath.cross([3, 7], [1, 0]))