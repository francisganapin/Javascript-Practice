const users = {
    john:{active:true},
    jane:{active:false},
    mark:{active:true}
};

for(let username in users){
    if(users[username].active){
        console.log(username + ' is active')
    }
}