let carFactory = (function () {
    let engines = {
        90: {power: 90, volume: 1800},
        120: {power: 120, volume: 2400},
        200: {power: 200, volume: 3500}
    };

    let carriages = {
        hatchback: {type: 'hatchback', color: ''},
        coupe: {type: 'coupe', color: ''}
    };

    function setEngine(power) {
        return engines[Object.keys(engines).filter(e => e >= power)[0]]
    }

    function setWheels(diameter){
        diameter = Math.floor(diameter)
        if (diameter % 2 ==0){
            diameter--
        }
        return [diameter,diameter,diameter,diameter]
    }

    return function (wish) {
        let car = {}
        car.model = wish.model;
        car.engine = setEngine(wish.power)
        car.carriage = carriages[wish.carriage]
        car.carriage.color = wish.color;
        car.wheels = setWheels(wish.wheelsize)

        return car;
    }
})();


let example = { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }


console.log(carFactory(example))