function createUser({name='Anouymouse',age = 18} = {}){
    console.log(`Name: ${name}, Age: ${age}`);
}

createUser();
createUser({name:'Alex'});
createUser({age:30});