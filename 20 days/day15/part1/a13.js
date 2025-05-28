const canFly = {
    fly(){
        console.log(`${this.name} is flying`);
    }
};


const canSwim = {
    swim(){
        console.log(`${this.name} is swiming. `);
    }
};

class Duck {
    constructor(name){
        this.name = name;
    }
}

Object.assign(Duck.prototype,canFly,canSwim);

const daffy = new Duck('Daffy');

daffy.fly();
daffy.swim();