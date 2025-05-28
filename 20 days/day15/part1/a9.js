function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function(){
    console.log(`Hi, I'm ${this.name}`);
}

let alice = new Person('Alice');
alice.sayHello();