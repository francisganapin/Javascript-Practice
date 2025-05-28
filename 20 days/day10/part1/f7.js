function findMax(...nums){
    return nums.reduce((a,b)=>(a > b ? a :b));
}

console.log(findMax(4,5,6))