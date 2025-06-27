const activeUsers = {};


function loginUser(username){
    activeUsers[username] ={
        active:true,
        lastSeen: new Date()
    };
    console.log(`${username} logged in and is active.`);
}


loginUser('well')
loginUser('jane')