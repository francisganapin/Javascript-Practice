function factorial(n){
    if( n === 0) return 1;
    return n * factorial(n - 1);
}

console.log("5! =",factorial(5));


function distance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


console.log("Distance",distance(0,0,3,4));