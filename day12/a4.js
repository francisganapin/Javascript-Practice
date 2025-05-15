const user = { profile:{names:'Wells'} };
console.log(user.profile?.names);


const users = { name2:'Well 2',age:25 };
const {name2, age } = users;

console.log(users.name2,users.age);