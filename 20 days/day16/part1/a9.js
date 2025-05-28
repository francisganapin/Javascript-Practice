const a = [1,2,3];
const b = [3,4,5];


if(a.some(item => b.includes(item))){
    console.log('Array have common elements');
}