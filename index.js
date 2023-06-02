console.log("👋")

const {readJsonFile, writeJsonFile } = require("./src/helpers")

const inform = console.log

const { index, show } = require("./animalsController")

function run(){
    
    inform("New Homies Unlocked Welcome\n\n")

   

 let animals = readJsonFile("data", "animals.json")
       console.log("New Data Read" , animals)
   
    console.log("Processed Object" , process)
    console.log("List of Arguments for this process.argv", process.argv)

    const action = process.argv[2];
    const animal = process.argv[3];

    switch(action){
        
        case "index":
            // animals.map( (eachAnimal)=>{ console.log(eachAnimal) } )
            const animalsView = index(animals);
            inform(animalsView);
            break;
       
        case "show":
            const animalViewShow = show(animals, animal);
            inform(animalViewShow);
            break;
         
        case ""

    }
}

run()