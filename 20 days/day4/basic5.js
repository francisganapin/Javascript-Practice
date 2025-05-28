

function greet({names,age}){
    console.log(`Hello ${names}, you are ${age} year old.`);
}

const person = {names:'Alice',age:30};
greet(person);