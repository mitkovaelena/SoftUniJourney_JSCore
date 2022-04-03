
//Escaping!!!!!!1
String.prototype.htmlEscape = function() {
    return this.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function printLetters(input){
for(let ind in input[0])
console.log(`str[${ind}] -> ${input[0][ind]}`)
}

function concatReverse(input) {
    let string = input.join("").split("").reverse().join("");
    console.log(string)
}

function countOcc([str, text]) {
    let ind = 0;
    let count = 0;
    while(true){
      ind = text.indexOf(str, ind+1);
        if(ind!=-1) count++;
        else break;
    }
    console.log(count)
}

function extractText([str]) {
    let arr = [];
    let ind1 = -1;
    let ind2 =-1;
    while(true){
        ind1 = str.indexOf("(", ind2+1);
        if(ind1!=-1) {
            ind2 = str.indexOf(")", ind1+1);
            if(ind2!=-1) {
                arr.push(str.substring(ind1+1, ind2))
            }
            else break;
        }
        else break;
    }
    console.log(arr.join(", "))
}


function aggregateTable(inp) {
    let input = inp.join("");
    let towns = input.split("|").map(x => x.trim()).filter((s,ind) => ind%2==1).join(", ");
    let sum = input.split("|").map(Number).filter((s,ind) => ind%2==0).reduce((a,b) => a+b);
    console.log(towns)
    console.log(sum)
}

function restaurantBill(input) {
    let food = input.filter((s,ind) => ind%2==0).join(", ");
    let sum = input.filter((s,ind) => ind%2==1).map(Number).reduce((a,b) => a+b);
    console.log(`You purchased ${food} for a total sum of ${sum}`)
}

function extractUsername(inp) {
    let users = [];
    for(let input of inp) {
        let [username, domain] = input.split("@");
        domain = domain.split(".").map(str => str[0]).join("");
         users.push(username + "." + domain);
    }
console.log(users.join(", "))
}

function censorship(inp) {
    let text = inp[0];
    for (let i = 1; i < inp.length; i++) {
        let regex = new RegExp( inp[i], "g")
     text = text.replace(regex, "-".repeat(inp[i].length))
    }
    console.log(text)
}

function escape(input){
    console.log("<ul>")
input.forEach(x => console.log(`  <li>${x.htmlEscape()}</li>`))
    console.log("</ul>")
}

function matchAllWords([text]) {
        console.log(text.match(/[0-9A-Za-z_]+/g).join("|"));
}

function validateEmail([email]) {
    let pattern =
        /^[a-zA-Z0-9]+\@[a-z]+(\.[a-z]+)+$/g;
    let result = pattern.test(email);
    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

function expressionSplit(input) {
    let expression = input[0];
    let elements = expression
        .split(/[\s.();,]+/);
    console.log(elements.join("\n"));
}

    function extractDates(inputSentences) {
        let pattern =
            /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
        let dates = [], match;
        for (let sentence of inputSentences)
            while (match = pattern.exec(sentence))
                dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        console.log(dates.join("\n"));
    }

function employeeData(inputSentences) {
    let pattern =/^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([A-Za-z0-9- ]*)$/g;
    let persons = [], match;
    for (let sentence of inputSentences)
        while (match = pattern.exec(sentence))
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
}

function fillForm(data) {
    let [username, email, phone] =
        [data.shift(), data.shift(), data.shift()];
    data.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    });
}

function bill(data) {
    data.forEach(line => {
        line = line.replace(/(-?\d+)\s*\*\s*(-?\d+(\.?\d*)?)/g, (match, num1, num2) => Number(num1)*Number(num2));
        console.log(line);
    });
}


    bill(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'])