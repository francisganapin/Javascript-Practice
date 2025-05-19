class Animal {
    constructor(name){
        if (this.constructor === Animal){
            throw new Error('Cannot instantiate an absctract class');
        }
        this.name = name;
    }
    speak() {
        throw new Error("Method 'speak()' must be implemented.");
    }

}

class Dog extends Animal {
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    speak(){
        console.log(`${this.name} barks. `);
    }
}

const Animals = [
    new Dog('')
]