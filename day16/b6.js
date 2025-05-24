const a = ['apple','banana'];
const b = ['banana','apple'];

const isEqual = 
    a.length === b.length &&
    a.every(item => b.includes(item));

if(isEqual){
    console.log('Array match');
}