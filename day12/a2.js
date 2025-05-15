class Vechile {
    constructor(type){
        this.type = type;
    }

    start(){
        console.log(`${this.type} is starting`);
    }
}

const car = new Vechile(`Car`);
car.start();


