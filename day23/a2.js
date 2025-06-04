const express = require('express');
const app = express();

app.use(express.json());


app.get('/',(req,res) =>{
    res.send('Hello Express!');
});

app.get('/about',(req,res) =>{
    res.send('This is the about page');
});

app.get('/status',(req,res) =>{
    const status = {
        "Status":"Running"
    };
   res.json(status);
});

app.post('/add',(req,res) => {
    console.log(req.body);
    res.send(`User ${req.body.name} added successfully`);
});

app.put('/update',(req,res) =>{
    console.log(req.body);
    res.send(`User ${req.body.name} update successfully`);
});


app.get('/user',(req,res) =>{
    const users = [{id:1,names:"WELL"},{id:2,names:"Alice"}];
    res.json(users);
});

app.use((req,res) =>{
    res.status(404).send("Page not Found");
});


const users = [
    {id:1,names:"Francis"},
    {id:2,names:"Alice"}
];


app.post('/users/data',(req,res) => {
    const newUser = {id:users.length + 1, name:req.body.name };
    users.push(newUser);
    res.status(201).json({message:`User ${newUser.name}`,user:newUser});
});


app.get('/users/data',(req,res) =>{
    res.json(users)
});



app.listen(3000,() => {
    console.log("Server is running on http://localhost:3000");
});