function angularParser(input) {

    let modules = {};
    for (let line of input) {
        let module = {};
        module.name = "";
        module.controllers = [];
        module.models = [];
        module.views = [];

        let [item, itemName, moduleName] = line.split("=");
        itemName = itemName.split("'")[1];

        if (item == "$app") {
            if (modules.hasOwnProperty(itemName))
                module = modules[itemName];
            module.name = itemName;
            modules[itemName] = module
        }

        else if (item == "$controller") {
            moduleName = moduleName.split("'")[1];
            if (modules.hasOwnProperty(moduleName))
                module = modules[moduleName];
            (module.controllers).push(itemName);
            modules[moduleName] = module
        }

        else if (item == "$model") {
            moduleName = moduleName.split("'")[1];
            if (modules.hasOwnProperty(moduleName))
                module = modules[moduleName];
            (module.models).push(itemName);
            modules[moduleName] = module
        }

        else if (item == "$view") {
            moduleName = moduleName.split("'")[1];
            if (modules.hasOwnProperty(moduleName))
                module = modules[moduleName];
            (module.views).push(itemName);
            modules[moduleName] = module
        }
    }

    let sortable = [];
    for (let key in modules) {
        modules[key].controllers.sort();
        modules[key].models.sort();
        modules[key].views.sort();

        if (modules[key].name) {
            delete modules[key].name
            sortable.push([key, modules[key]])
        }
        else
            delete modules[key]
    }

    sortable.sort(
        function(a, b) {
            return b[1].controllers.length - a[1].controllers.length || a[1].models.length - b[1].models.length
        }
    )

    let modulesSorted = {}
    for (let s of sortable){
        modulesSorted[s[0]]=s[1]
    }
   
console.log(JSON.stringify(modulesSorted))
}

angularParser(["$controller='PHPController'&app='Language Parser'",
    "$controller='JavaController'&app='Language Parser'",
    "$model='C#Controller'&app='Language Parser'",
    "$controller='C++Controller'&app='.. ..'",
    "$app='Garbage Collector'",
    "$controller='GarbageController'&app='Garbage Collector'",
    "$controller='SpamController'&app='Garbage Collector'",
    "$app='Language Parser'"])