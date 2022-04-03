function VladkosNotebook(input) {
    let colors = {};
    for (let line of input) {
        let item = {};
        item.age = 0;
        item.name = "";
        item.numWins = 0;
        item.numLosses = 0;
        item.opponents = [];

        let [color, prop, val] = line.split("|");

        if (prop == "name") {
            if (colors.hasOwnProperty(color))
                item = colors[color];
            item.name = val;
            colors[color] = item
        }

        else if (prop == "age") {
            if (colors.hasOwnProperty(color))
                item = colors[color];
            item.age = val;
            colors[color] = item
        }

        else if (prop == "win") {
            if (colors.hasOwnProperty(color))
                item = colors[color];
            item.numWins++;
            (item.opponents).push(val);
            colors[color] = item
        }

        else if (prop == "loss") {
            if (colors.hasOwnProperty(color))
                item = colors[color];
            item.numLosses++;
            (item.opponents).push(val);
            colors[color] = item
        }
    }

    let sortable = [];
    for (let key in colors) {
        if (!colors[key].name || !colors[key].age) {
            delete colors[key];
            continue;
        }
        colors[key].opponents.sort();
        colors[key].rank = String(parseFloat((Number(colors[key].numWins)+1)/(Number(colors[key].numLosses)+1)).toFixed(2))
        delete colors[key].numWins;
        delete colors[key].numLosses;
        sortable.push([key, colors[key]])
    }

    sortable.sort()

    let pagesSorted = {}
    for (let s of sortable){
        pagesSorted[s[0]]=s[1]
    }
    console.log(JSON.stringify(pagesSorted))
}

VladkosNotebook(["red|age|99",
    "purple|age|44",
    "blue|win|pesho",
    "blue|win|mariya",
    "purple|loss|Kiko",
    "purple|loss|Kiko",
    "purple|loss|Kiko",
    "purple|loss|Yana",
    "purple|loss|Yana",
    "purple|loss|Manov",
    "purple|loss|Manov",
    "red|name|gosho",
    "blue|win|Vladko",
    "purple|loss|Yana",
    "purple|name|VladoKaramfilov",
    "blue|age|21",
    "purple|name|eli",
    "blue|name|Pesho"])