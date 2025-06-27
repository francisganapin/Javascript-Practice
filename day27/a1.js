const users = {
    'john':{active:true},
    'jane':{active:false},
    'mark':{active:true}
};

function isUserActive(username){
    return users[username]?.active === true;
}

console.log(isUserActive('john'));
console.log(isUserActive('jane'));
console.log(isUserActive('mark'));