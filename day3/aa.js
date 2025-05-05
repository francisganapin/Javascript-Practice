const express = require('express');
const app = express();
const port = 3000;


app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res) =>{
    res.render('form');
});

app.post('/submit',(req,res) =>
    {
    const message = req.body.msg;
    console.log('Message from client:',message);
    res.send(`recieve ${message}`);
});

app.listen(port,() =>{
    console.log(`Server running at http://localhost:${port}`);
});