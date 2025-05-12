class Animal {
    constructor(type){
        this.type = type;
    }
    walk(){
        console.log(`This ${this.type} can walk`);
    }
    meow(){
        console.log(`This ${this.type} can meow`)
    }
}

const a  = new Animal('Cat')
a.meow()