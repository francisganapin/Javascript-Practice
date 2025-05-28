class Bird{
    constructor(type,color){
        this.type = type;
        this.color = color;
    }
    fly(){
        console.log(`this ${this.color} ${this.type} is flying High.`);
    }
    sing(){
        console.log(`The ${this.type} sing beautifully.`);
    }
}

const b = new Bird('Parrot','green');
b.fly();
b.sing();