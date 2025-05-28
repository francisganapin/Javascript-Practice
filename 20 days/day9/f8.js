const car = {
    brand:'Toyota',
    model:'Corolla',
    year:20202
};

console.log(car.model);
console.log(car['year']);

car.color = 'red';

car.year = 2023;

for (const key in car){
    console.log(key + ': '+ car[key]);
}