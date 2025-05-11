let jsonString = '{"name":"Alex","age":32}'
let user = JSON.parse(jsonString);

let userString = JSON.stringify(user);

console.log(jsonString)
console.log(user)
console.log(userString)