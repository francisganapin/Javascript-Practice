class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const francis = new Person('Francis',25);
francis.greet();