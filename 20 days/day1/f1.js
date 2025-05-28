function map(f,a){
    const result = new Array(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = f(a[i]);
    }
    return result;
}

const number = [0,1,2,5,10];
const cubedNumber = map(function(x){
    return x ** 3;
},number);

console.log(cubedNumber);