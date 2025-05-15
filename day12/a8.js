for (let i = 0, j = 5; i < j; i++, j--){
    console.log(i,j);
}

const obj = {a:1,b:2};
delete obj.a;

console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(2 ** 3);