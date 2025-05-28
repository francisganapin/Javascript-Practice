const items = [1,2,3,4,5]


const sumEven = items.reduce((acc,item) =>{
    if(item % 2 === 0){
        return acc + item;
    }
    return acc;
},0);

console.log(sumEven);