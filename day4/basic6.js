const people = [
    {names:'tom',age:25},
    {names:'henry',age:28}
];


let [{ names:firstName },{age:secondAge}] = people;

console.log(firstName);
console.log(secondAge)
