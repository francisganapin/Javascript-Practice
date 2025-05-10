const curryFunction = a => b => c => a + b + c;

console.log(curryFunction(1)(2)(3));