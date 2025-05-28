let num = 0;
let myFunc;


if (num === 0){
    myFunc = function (theObject){
        theObject.make = 'Toyota';
    };
}

const car = {model:'Corolla'};

if (myFunc){
    myFunc(car);
}

console.log(car);