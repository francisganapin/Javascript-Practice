let sales = [100,150,200,120];
let sum = 0;


for (let i = 0; i < sales.length; i++){
    sum += sales[i];
}

let average = sum / sales.length;
console.log('Average sales',average);


let maxSale = Math.max(...sales);