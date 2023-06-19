// Write code here
function cowSounds() {
    console.log("Cows go MOOO!")
}

function dogSounds() {
    console.log("Dogs go WOOOF!")
}

function duckSounds() {
    console.log("Ducks go QUACK!")
}

function whatSound(animals) {
    if (animals == "Cow"){
        cowSounds();
    } else if (animals == "Dog"){
        dogSounds();
    } else if (animals == "Duck"){
        duckSounds();
    } else {
        console.log ("I'm not sure what noise that animal makes.");
    }
}

// DONT CHANGE. THIS IS FOR TESTING
let animals = [ "Bat", "Cat", "Cat", "Dog", "Cow", "Duck", "Dog", "Fish", "Cow", "Dog", "Duck", "Duck" ]

for (let animal of animals) {
        whatSound(animal)
}
