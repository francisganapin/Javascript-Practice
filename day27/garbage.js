const { markAsUntransferable } = require("worker_threads");

function createUser(){
    let user = {
        name:'Francis',
        age:30,
    };
    return user;
}

let person = createUser();

person = null;