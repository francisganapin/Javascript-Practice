const product = [
    { names:'Whey',    stock:0 },
    { names:'creatine', stock:5 },
    { names:'mass gainer', stock:10}
];


const available = product.find(p => p.stock > 0);
console.log(available.names);