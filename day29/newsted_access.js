const person = {
    name:'Ella',
    address:{
        city:"Manila",
    },
    contact:{
        email:'lokoloko@gmail.com'
    }
};

console.log(person.address?.city);
console.log(person.contact?.email);