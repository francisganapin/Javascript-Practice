function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log(`Hi, i'm ${this.name}`);
};

const p = new Person("Francis");
p.sayHi();