const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    {id:1,name:'Alice'},
    {id:2,name:'Bob'}
];

app.get('/users',(req,res) =>{
    res.json(users);
});

app.post('/users',(req,res) =>{
    const newUser = {
        id:users.length  + 1,
        name:req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users/:id',(req,res) =>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({message:"User not found"});
    res.json(user);
});

app.delete('/users/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.json({message:'User delete'});
});

app.listen(PORT,() =>{
    console.log(`Server running on http://localhost:${PORT}`);
});