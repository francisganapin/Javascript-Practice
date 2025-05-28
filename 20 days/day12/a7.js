let a = null;

a ??=5;

let b = false;
b ||= true;

let c = true;
c &&= false;

console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);