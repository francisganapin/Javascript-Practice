const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


app.get('/api/reader',async(req,res)=>{
    try{
        const response = await axios.get('http://127.0.0.1:5000/')
        .then(response => console.log(response.data))
        .catch(error => console.error('Error:',error));
    }catch(error){
        res.status(500).send('Erorr conenction of flask');
    }
});

app.listen(port,() =>{
    console.log(`Express running at http://localhost:${port}`);
})