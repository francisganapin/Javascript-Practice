class Animal {
    constructor(type,sound){
        this.type = type;
        this.sound = sound;
    }
    speak(){
        console.log(`This ${this.type} say: ${this.sound}`);
    }
}

const cat = new Animal('Cat','Meow');
const cow = new Animal('Cow','Moo');

cat.speak();
cow.speak();