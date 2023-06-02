const inform = console.log








function index(arrayofAnimals){
    arrayofAnimals.map( (eachAnimal)=> eachAnimal.id + " " + eachAnimal.name).join("\n");
}


function show(arrayofAnimals, animalId){
    const animalToFind = arrayofAnimals.find((animal) => animal.id === animalId);
    return animalToFind.id + " " + animalToFind.name + " " + animalToFind.points + " points";

}

module.exports = { index, show }