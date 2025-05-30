const express = require('express');
const sqlite = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

app.use(express.json());

const db = new sqlite3.Database('./instance/student1.db',(err) =>{
    if(err) return console.log(err.message);
    console.log('Connected to sqlite database');
});