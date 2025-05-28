const animal = {
    speak(){
        console.log(`${this.name} makes a noise`);
    }
};

const dog = Object.create(animal);
dog.name = 'Buddy';
dog.speak();