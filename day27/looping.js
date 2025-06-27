const user = {name:'Alex',age:30};


for (const key in user){
    console.log(key,user[key]);
}

Object.entries(user).forEach(([key,value])=>{
    console.log(`${key} -> ${value}`);
});