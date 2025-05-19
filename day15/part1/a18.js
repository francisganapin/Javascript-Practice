const person = { name:'Jonh'};

function greet(person){
    if(typeof person === 'string' ){
        console.log(`Hello ${person}`);
    }else if (typeof person === 'object'){
        console.log(`Hello ${person.name}`);
    }
}

greet(person);