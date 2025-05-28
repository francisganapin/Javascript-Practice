const user = {
    id:101,
    profile:{
        username:'alice101',
        email:'alice@example.com'
    }
};

const { profile:{ username }} = user;

console.log(username)