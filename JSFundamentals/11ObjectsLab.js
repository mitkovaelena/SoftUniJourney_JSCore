function htmlEscape(text) {
    let map = { '"': '&quot;', '&': '&amp;',
        "'": '&#39;', '<': '&lt;', '>': '&gt;' };
    return text.replace(/[\"&'<>]/g, ch => map[ch]);
}


function JSONTable(input){
  headings = input.shift().split(/\s*\|\s*/)
    let towns=[];
    for(let town of input){
        let t = {};
        t.Town = town.split(/\s*\|\s*/)[1];
        t.Latitude = Number(town.split(/\s*\|\s*/)[2]);
        t.Longitude = Number(town.split(/\s*\|\s*/)[3]);
        towns.push(t)
    }
    console.log(JSON.stringify(towns))
}

function scoreToHTML(input){
    let objs = JSON.parse(input);
    let html="<table>\n  <tr><th>name</th><th>score</th></tr>\n";
    for(let obj of objs){
        html += `  <tr><td>${String(obj.name).htmlEscape()}</td><td>${String(obj.score).htmlEscape()}</td></tr>\n`
    }
    html +="</table>"
    console.log(html)
}

function JSONToHTMLTable(input){
    let objs = JSON.parse(input);
    let keys = Object.keys(objs[0]);
    let html="<table>\n"
    html += "  <tr>"
    for(let key of keys) {
        html += `<th>${key}</th>`
    }
    html += "</tr>\n";

    for(let obj of objs){
        html += `  <tr>`;
        for(let key of keys) {
            html += `<td>${htmlEscape(String(obj[key]))}</td>`
        }
        html += `</tr>\n`
    }
    html +="</table>"
    console.log(html)
}

function sumByTown(input){
    let sums = {};
    for (let i = 0; i < input.length; i++) {
        if(sums[input[i]] == undefined) {
            sums[input[i++]] = Number(input[i]);
        }
        else{
            sums[input[i++]] += Number(input[i]);
        }
    }
    console.log(JSON.stringify(sums))
}

function wordsCount(input){
    input = input.join("\n")
    input = input.split(/[^A-Za-z0-9_]+/).filter(s => s != "")
    let words = {};
    for (let i = 0; i < input.length; i++) {
        if(words[input[i]] == undefined) {
            words[input[i]] =1;
        }
        else{
            words[input[i]] += 1;
        }
    }
    console.log(JSON.stringify(words))
}

function wordsCountMap(input){
    input = input.join("\n").toLowerCase();
    input = input.split(/[^A-Za-z0-9_]+/).filter(s => s != "")
    let words = new Map();
    for (let i = 0; i < input.length; i++) {
        if(!words.has(input[i])) {
            words.set(input[i],1);
        }
        else{
            words.set(input[i],words.get(input[i])+1);
        }
    }
    words = Array.from(words).sort()
    for(let [k,v] of words)
    console.log(`'${k}' -> ${v} times`)
}

function population(input){
    input = input.join(" <-> ")
    input = input.split(" <-> ").filter(s => s != "").map(s => s.trim())
    let towns = new Map();
    for (let i = 0; i < input.length; i++) {
        if(!towns.has(input[i])) {
            towns.set(input[i++],Number(input[i]));
        }
        else{
            towns.set(input[i],towns.get(input[i++])+Number(input[i]));
        }
    }
    for(let [k,v] of towns)
        console.log(`${k} : ${v}`)
}

function cityMarkets(input){
    let townsProducts = new Map();
    for(let sale of input){
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);

        if(!townsProducts.has(town)) {
            townsProducts.set(town, new Map());
        }
            let income = quantity*price;
            let oldIncome = townsProducts.get(town).get(product);
            if(oldIncome) income += oldIncome;
            townsProducts.get(town).set(product, income)
        }

    for(let [k,v] of townsProducts){
        console.log(`Town - ${k}`)
        for(let [kk,vv] of v){
            console.log(`$$$${kk} : ${vv}`)
        }
    }
}

function lowestPrice(input){
    input = input.join("|")
    input = input.split(/\s*\|\s*/).filter(s => s != "")
    let townProductPrice = new Map();
    for (let i = 0; i < input.length; i+=3) {
        let townProduct = input[i]+ "|" + input[i+1];
        townProductPrice.set(townProduct, input[i+2]);
        }

    let productPriceTown = new Map()
    for(let key of townProductPrice.keys()){
        let town = key.split("|")[0]
        let product = key.split("|")[1]
        let price = townProductPrice.get(key)

        if(productPriceTown.has(product)){
            if(Number(productPriceTown.get(product).split("|")[0])> Number(price)){
                productPriceTown.set(product, price+"|"+town);
            }
        }
        else{
            productPriceTown.set(product, price+"|"+town);
        }
    }

    for(let item of productPriceTown.keys()){
        console.log(`${item} -> ${Number(productPriceTown.get(item).split("|")[0])} (${productPriceTown.get(item).split("|")[1]})`)
    }
}

function uniqueWords(input){
    input = input.join("\n").toLowerCase();
    input = input.split(/[^A-Za-z0-9_]+/).filter(s => s != "")
    let words = new Set();
    for (let i = 0; i < input.length; i++) {
        words.add(input[i]);
    }
 words = Array.from(words).join(", ");
        console.log(words)
}

lowestPrice(['Sample Town | Sample Product | 10.00',
    'Sample Town | Orange | 1',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 2',
    'Sofia | Peach | 2',
    '5 | Sample Product | 1000.1',
    '5 | Burger | 10'])