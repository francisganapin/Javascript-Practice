const activeUsers = {
    'well':{active:true,lastSeen:'11:45 am'},
    'jeep':{active:false,lastSeen:'6:45 pm'},
    'masaro':{active:true,lastSeen:'5:45 pm'}
}


function showUserStatus(username){
    const user = activeUsers[username];
    if(!user){
        console.log(`${username} not found`);
        return;
    }
    if (user.active){
        console.log(`${username} is online`)
    }else{
        console.log(`${username} is offline last seen at ${user.lastSeen}`);
    }
}

showUserStatus('well')
showUserStatus('jeep')
showUserStatus('masarap')

