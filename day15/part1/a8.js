class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello,my name is ${this.name}.`);
    }
}

class Employee extends Person{
    constructor(name,age,jobTitle){
        super(name,age);
        this.jobTitle = jobTitle;
    }
    describe(){
        console.log(`${this.name} is a ${this.jobTitle}.`);
    }
}

let john = new Employee('John',30,'Software Engineer');
john.greet();
john.describe();