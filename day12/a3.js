class Vechile{
    constructor(type){
        this.type = type;
    }
    start(){
        console.log(`${this.type} is starting`);
    }
}

class Car extends Vechile{
    constructor(brand){
        super('Car');
        this.brand = brand;
    }
    info(){
        console.log(`${this.brand} is a ${this.type}`);
    }
}

const myCar = new Car('Toyota');
myCar.start();
myCar.info();