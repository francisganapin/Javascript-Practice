function applyOperation(a,b,operation){
    return operation(a,b);
}

function add(x,y){
    return x + y;
}

console.log(applyOperation(5,3,add));