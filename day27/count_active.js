let count = 0;

const users = {
    'john':{active:true},
    'jane':{active:false},
    'miguel':{active:true},
    'tamod':{active:true},
    'janed':{active:false},
    'mark':{active:true}
}


for (let username in users){
    if(users[username].active){
        count++
    }
}

console.log('Active user:' + count);