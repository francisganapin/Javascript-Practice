const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


app.get('/api/reader',async(req,res)=>{
    try{
        const response = await axios.get('http://127.0.0.1:5000/user');
        res.json(response.data);
        console.log(response.data)
    }catch(error){
        res.status(500).send('Erorr conenction of flask');
    }
});

app.listen(port,() =>{
    console.log(`Express running at http://localhost:${port}/api/reader`);
})