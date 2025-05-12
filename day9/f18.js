class Animal {
    constructor(type){
        this.type = type;
    }

    speak(){
        console.log(`this ${this.type} makes a sound`);
    }
}

const a = new Animal('dog');
a.speak();