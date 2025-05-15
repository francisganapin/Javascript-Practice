function sum(...nums){
    return nums.reduce((a,b) => a + b );
}

const { a, ...rest } = {a:1,b:2,c:3};
console.log(rest)