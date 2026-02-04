function calculateTotal(price){
    let  total = 0;
    for (let price of prices){
        total += price;
    }
    return total;
}


let prices = [10.5,20.3,15.0];
console.log('Total:',calculateTotal(prices));

function addTax(amount,rate){
    return amount * (1 + rate / 100)
}

console.log('With 10% tax',addTax(45.8,10));


console.log(Math.sin(Math.PI / 2));
console.log(Math.cos(0));