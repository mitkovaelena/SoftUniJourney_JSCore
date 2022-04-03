let constructionCrew = (function () {
    return function (worker) {

        if (worker.handsShaking) {
            worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
            worker.handsShaking = false;
        }
        return worker;
    }
})();

function constructionCrew2 (worker) {
    if (worker.handsShaking == true) {
        worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
        worker.handsShaking = false;
    }
    return worker;
}


let example = {
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: false
}

console.log(constructionCrew(example))
console.log(constructionCrew2(example))