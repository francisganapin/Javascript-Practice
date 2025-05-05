const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


app.use(express.json());

app.post('/send-to-flask',async(req,res) =>{
    const payload ={
        name:'Francis',
        role:'Developer'
    };

    try{
        const respose = await axios.post('http://127.0.0.1:5000/recieve',payload)
        res.json(respose.data);
    }catch(error){
        console.error('Error',error.message);
        res.status(500).send('Failed to send data to flask');
    }
});

app.listen(poirt,() =>{
    console.log(`Express running at http://localhost:${port}`);
}) 
