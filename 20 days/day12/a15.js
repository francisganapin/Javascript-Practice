let numbers = [3,-2,7,-1,5];
let sum = 0;
let i = 0;

while (i < numbers.length){
    if( numbers[i] > 0){
        sum += numbers[i];
    }
    i++;
}

console.log('Sum of positive number',sum);