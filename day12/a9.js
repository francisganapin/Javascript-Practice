const sym = Symbol('id');

const user = {
    name:'Francis',
    [sym]:12345
};

console.log(user[sym])