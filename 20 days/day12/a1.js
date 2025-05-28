const user = {
    names:'Francis',
    greet(){
        console.log(`Hello, ${this.names}`);
    }
};
user.greet();

function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayHi = function (){
        console.log(`Hi, i'm ${this.name}`);
    };
}

const p = new Person('Well',25);
p.sayHi();


function Animal(dogs){
    this.dogs = dogs;
}
Animal.prototype.speak = function (){
    console.log(`${this.dogs} make a sound`);
};

const dog = new Animal('Dog');
dog.speak();


