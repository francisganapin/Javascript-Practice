const student = {
    id:1,
    names:'John',
    grade:"A",
    age:20
};


let {id, ...details } = student;

console.log(id);
console.log(details);