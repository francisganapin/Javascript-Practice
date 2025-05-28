function add(x,y){
    return x + y;
}

let result = add(10,20);
console.log(result);

function add(x,y){
    return x + y;
}

let result2 = add.call(this,11,20)
console.log(result2)