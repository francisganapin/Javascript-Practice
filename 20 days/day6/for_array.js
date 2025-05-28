let items = ['apple','banana','cherry'];


for(let item of items){
    console.log(item)
}
let person = {name:'whely',age:25,city:'Manila'};

for (let key in person){
    console.log(`${key}: ${person[key]}`);
}