const users = {
    'john':{active:true},
    'jane':{active:false},
    'mark':{active:true}
}


const activeUsers = Object.entries(users)
    .filter(([username,data]) => data.active)
    .map(([username]) => username);

console.log(activeUsers);