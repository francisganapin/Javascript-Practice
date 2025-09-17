const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();


const app = express();
const port = 3000;

//MiddleWare
app.use(bodyParser.json());


const db = new sqlite3.Database('./users.db');


app.post('/login',(req,res) =>{
    
})