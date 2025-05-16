let users =[
    { names:'Alice',age:25} ,
    { names:'Bob',age:30  }
];

let adults = users.filter(user => user.age > 26);

console.log(adults)