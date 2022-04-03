function heroes(input){

    let heroes = [];
    for(let item of input){
        item = item.split(/\s*[\/,]\s*/);
        let hero = {};
        hero.name = item.shift();
        hero.level = Number(item.shift())
        hero.items = item;
        heroes.push(hero)
    }
    console.log(JSON.stringify(heroes))
}


function JSONToHTML(input){
    let html="<table>\n"
    for(let item of input){
        let obj = JSON.parse(item);
        html += `    <tr>\n`;
        for(let key of Object.keys(obj)) {
            html += `        <td>${obj[key]}</td>\n`
        }
        html += `   </tr>\n`
    }
    html +="</table>"
    console.log(html)
}

function cappyJuice(input){
    let bottles = new Map();
    let mls = {};
    for (let i = 0; i < input.length; i++) {
        let fruit = input[i].split(" => ")[0]
        let ml = input[i].split(" => ")[1]

        if(mls[fruit] == undefined) {
            mls[fruit] = Number(ml);
        }
        else{
            mls[fruit] += Number(ml);
        }

        if(Number(mls[fruit])>=1000){
            let bot = Math.floor(Number(mls[fruit])/1000);
          bottles.set(fruit, bot)
        }
    }

    for(let [k,v] of bottles)
        console.log(`${k} => ${v}`)
}

function storeCatalogue(input){
    let products = [];
    for(let item of input){
        products.push(item.split(/\s*:\s*/).join(": "))
    }
    products.sort();
    let firstLetter = ''
    for(let product of products) {
        if(firstLetter != product.slice(0,1)) {
            firstLetter = product[0];
            console.log(firstLetter.toUpperCase());
        }
        console.log("  "+product)
    }
}

function autoCompany(input){
    let brandProducts = new Map();
    for(let sale of input){
        let [brand, product, quantity] = sale.split(/\s*\|\s*/);
        quantity = Number(quantity)
        if(!brandProducts.has(brand)) {
            brandProducts.set(brand, new Map());
        }
        let oldQuantity = brandProducts.get(brand).get(product);
        if(oldQuantity) quantity += Number(oldQuantity);
        brandProducts.get(brand).set(product, quantity)
    }
    for(let [k,v] of brandProducts){
        console.log(k)
        for(let [kk,vv] of v){
            console.log(`###${kk} -> ${vv}`)
        }
    }
}

function systemComponents(input){
    let systems = new Map();
    for(let sale of input){
        let [systemName, component, subcomponent] = sale.split(/\s*\|\s*/);

        if(!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }
        let oldSubs = []
        if(systems.get(systemName).get(component))
        oldSubs = Array.from(systems.get(systemName).get(component));
        oldSubs.push(subcomponent);
        systems.get(systemName).set(component, oldSubs)
    }

    systems.sort(function e(a,b){ return Array.from(a.keys()).length-Array.from(a.keys()).length})

   systems = Array.from(systems).sort().sort((a,b) => Array.from(b[1].keys()).length-Array.from(a[1].keys()).length)
   //systems = systems.map(x => Array.from(x[1]).sort((a,b) => b.length-a.length))
    for(let [k,v] of systems){
        console.log(k)
        for(let [kk,vv] of v){
            console.log(`|||${kk}`)
            for(let vvv of vv){
                console.log(`||||||${vvv}`)
            }
        }
    }
}

function usernames(input) {
    let names = new Set();
    input = input.sort((a,b) => {
        if(a.length != b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });

    for(let name of input){
        names.add(name)
    }
    console.log(Array.from(names).join("\n"));
}

usernames(['Denise',
  ' Ignatius',
  ' Iris',
  ' Isacc',
  ' Indie',
  ' Dean',
  ' Donatello',
  ' Enfuego',
  ' Benjamin',
  ' Biser'])