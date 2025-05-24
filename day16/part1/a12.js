const items = ['a','b','a'];

const hasDuplicates = new Set(items).size !== items.length;

if(hasDuplicates){
    console.log('There are duplicate.');
}