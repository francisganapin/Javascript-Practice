class Animal {
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    speak(){
        return `${this.name} makes a noise`;
    }
}


const dog = new Animal('buddy','Dog');
console.log(dog.speak());
console.log(dog.type);