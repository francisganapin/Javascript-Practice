let myFunc;
let num = 1;

if(num === 0){
    myFunc = obj => obj.make = 'Toyota';
} else if(num === 1){
    myFunc = obj => obj.make = 'Ford';
}else{
    myFunc = obj => obj.make = 'Honda';
}

const car = {};
myFunc(car);
console.log(car);