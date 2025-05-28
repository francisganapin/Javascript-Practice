const users = [
    {name:'Ana',age:22},
    {name:'Ben',age:25}
];

for (let {name,age} of users){
    console.log(`${name} is ${age} years old`);
}