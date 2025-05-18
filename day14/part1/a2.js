const arr = [3,5,7];
arr.foo = 'hello';


for (const i in arr){
    console.log(i);
}

for (const i of arr){
    console.log(i)
}