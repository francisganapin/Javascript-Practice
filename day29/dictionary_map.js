const users = new Map();

users.set('alice',{age:25});
users.set('bob',{age:30});

console.log(users.get('bob'));

for (const [key,value] of users){
    console.log(key,value);
}