function welcome({names = 'Guest', role = 'User'} = {}){
    console.log(`Welcome, ${names}! you are logged in as ${role}.`);
}


welcome();
welcome({names:'Leon'});