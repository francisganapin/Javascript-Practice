function getAverageAge(users){
    let totalAge = users.reduce((sum,user) => sum + user.age, 0);
    return totalAge / users.length;
}

let jonh = { names:'John',age:25 };
let pete = { names:'Pete',age:30 };
let mary = { names:'Mary',age:29 };

let arr = [ jonh, pete, mary ];

console.log( getAverageAge(arr) );