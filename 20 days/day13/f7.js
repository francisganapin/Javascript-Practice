let nums = [1,2,3,4,5];

let result = nums
    .map(x => x * 2)
    .filter(x => x > 5)
    .reduce((a,b) => a + b, 0);


console.log(result);