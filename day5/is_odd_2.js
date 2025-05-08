function isOdd(number){
    return number % 2;
}

function getOddNumber(){
    return Array.prototype.filter.call(arguments,isOdd);
}

let results = getOddNumber(10,1,3,4,8,9);
console.log(results);