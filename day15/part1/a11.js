class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make a sound.`);
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    speak(){
        console.log(`${this.name} barks. `);
    }
}

const animals = [
    new Dog('Rover','Labrador'),
    new Animal('Generic Animal')
];

animals.forEach(animal => animal.speak());