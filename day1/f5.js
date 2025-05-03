function loop(x){
    if(x >= 10){
        return x;
    }
    return loop(x + 1);
}

console.log(loop(2));