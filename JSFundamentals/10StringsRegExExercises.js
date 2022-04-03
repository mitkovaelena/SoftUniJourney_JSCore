function splitWords([text, delimiter]){
    let str = text.split(delimiter);
    for(let item of str)
        console.log(item)
}

function repeatString([str, repeat]){
        console.log(str.repeat(repeat))
}

function startStr([str, substr]){
    if(str.indexOf(substr)==0)
    console.log(true)
    else console.log(false)
}


function startStr([str, substr]){
    if(str.indexOf(substr)==str.length-substr.length)
        console.log(true)
    else console.log(false)
}

function capitalize([str]){
   str = str.toLowerCase();
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    console.log(arr.join(" "))
}

function captureNums(input){
    input = input.join();
    let matches = input.match(/\d+/g)
    console.log(matches.join(" "))
}

function varNames([input]){
    let matches = input.match(/\b_[A-Za-z0-9]+\b/g).map(x => x.slice(1))
    console.log(matches.join(","))
}

function wordOcc([input, word]){
    let regEx = new RegExp("\\b"+word+"\\b", 'ig');
    let matches = input.match(regEx)
    if(matches)
    console.log(matches.length)
    else
        console.log("0")
}

function extractLinks(inputSentences) {
    let pattern = /(www)\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;
    let links = [], match;
    for (let sentence of inputSentences)
        while (match = pattern.exec(sentence))
            links.push(match[0]);
    console.log(links.join("\n"));
}

function secretData(input) {

    String.prototype.dataEscape = function() {
        return this.replace(/(\*[A-Z][A-Za-z]*)\b/g,  m => '|'.repeat((m.length)))
            .replace(/(\+[0-9\-]{10})(?= |\t|$)/g, m => '|'.repeat((m.length)))
            .replace(/(\![A-Za-z0-9]+)(?= |\t|$)/g, m => '|'.repeat((m.length)))
            .replace(/(_[A-Za-z0-9]+)(?= |\t|$)/g, m => '|'.repeat((m.length)));
    }

    input.forEach(x => console.log(`${x.dataEscape()}`))
}

secretData(["Agent *Ivankov was in the room when it all happened.    The person in the room was heavily armed.        Agent *Ivankov had to act quick in order.        He picked up his phone and called some unknown number.        I think it was +555-49-796    I can't really remember...    He said something about with subject !2491a23BVB34Q and returning to Base _Aurora21Then after that he disappeared from my sight.    As if he vanished in the shadows.    A moment, shorter than a second, later, I saw the person flying off the top floor.    I really don't know what happened there.This is all I saw, that night.    I cannot explain it myself..."])