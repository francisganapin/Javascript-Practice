class Dog{
    constructor(name){
        this.name = name;
    }
    bark(){
        console.log(`${this.name} says: Woof!`);
    }
    fetch(){
        console.log(`${this.name} is fetching the ball...`);
    }
}

const d = new Dog('Buddy');
d.bark();
d.fetch();