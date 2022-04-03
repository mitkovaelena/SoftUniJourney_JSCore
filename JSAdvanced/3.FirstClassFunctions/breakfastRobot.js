    let robot = (function () {
        let resources = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
        let recipes = {
            apple: {carbohydrate: 1, flavour: 2},
            coke: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            omelet: {protein: 5, fat: 1, flavour: 1},
            cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        };

        function restock(elem, quantity) {
            resources[elem] += Number(quantity);
            return "Success"
        }

        function prepare(recepie, quantity) {
            let productsNeeded = recipes[recepie];
            for (let key of Object.keys(productsNeeded)) {
                if (resources[key] - quantity * productsNeeded[key] < 0) {
                    return "Error: not enough " + key + " in stock"
                }
                else resources[key] -= quantity * productsNeeded[key]
            }
            return "Success"
        }

        function report() {
            return `protein=${resources.protein} carbohydrate=${resources.carbohydrate} fat=${resources.fat} flavour=${
                resources.flavour}`
        }

        return function (input) {
            let tokens = input.split(" ");
            let commandName = tokens.shift();
            let args = tokens;
            switch (commandName) {
                case 'prepare':
                    return prepare(...args);
                    break;
                case 'restock':
                    return restock(...args);
                    break;
                default:
                    return report();
                    break;
            }
        }
    })();

    console.log(robot("restock flavour 50"))
    console.log(robot("prepare coke 4"))
    console.log(robot("report"))
