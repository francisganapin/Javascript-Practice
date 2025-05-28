const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1,30,39,29,10,41];

console.log(array1.every(isBelowThreshold));

