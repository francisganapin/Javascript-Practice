const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index3',{result:null});
});

app.post('/add',(req,res) =>{
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const message = num1 + num2;
    res.render('index',{message});
});

app.listen(3000,() =>{
    console.log(`Server is running on http://localhost:3000`);
})