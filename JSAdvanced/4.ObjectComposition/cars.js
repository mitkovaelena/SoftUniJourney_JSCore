function cars(commands){
let carProcessor = (function () {
    let allCars = new Map;

    function create(name, inherits ,parent) {
        if(parent == undefined){
            allCars.set(name, {});
        }
        else{
            allCars.set(name, Object.create(allCars.get(parent)))
        }
    }
    
    function set(name, key, value) {
        allCars.get(name)[key] = value;
    }

    function print(objName) {
        let obj = allCars.get(objName);
        let objArr = []
        for(let k in obj){
            objArr.push(`${k}:${allCars.get(objName)[k]}`)
        }
        console.log(objArr.join(', '));
    }

    return{create, set, print }
})() ;

    for (let cmd of commands) {
        cmd = cmd.split(/\s+/);
        let cmdName = cmd.shift();
        carProcessor[cmdName](...cmd);
    }
}

cars(['create pesho','set pesho rank number1','create gosho inherit pesho','create stamat inherit gosho','set gosho nick goshko','print gosho']);
