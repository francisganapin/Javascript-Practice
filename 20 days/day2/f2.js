const express = require('express');
const fs = require('fs')
const app = express();

PORT = 8080

app.get('/',(req,res) =>{
    fs.readFile('index.html',(err,data) =>{
        if(err){
            return res.status(404).send('404 NOT Found');
        }
        res.setHeader('Content-Type','text/html');
        res.send(data);
    });
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});