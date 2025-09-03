const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());


const quiz = {
    question:"What is the capital of France",
    option:{
        a:"Berline",
        b:"Madrid",
        c:"Paris",
        d:"Rome"
    },
    answer:"c",
    facts:"Capital of France is Paris"

};


app.get('/question',(req,res) =>{
    res.json({
        question:quiz.question,
        option:quiz.options,
    });
});


app.post('/answer',(req,res) =>{
    const  userAnswer = req.body.answer;

    if(!userAnswer){
        return res.status(400).json({
            message:'Please provide an answer (a,b,c, or d).',
        });
    }
    if(userAnswer.toLowerCase() ===quiz.answer ){
        res.json({result:'Correct'});
    }else{
        res.json({
            message:'wrong',
            correct_answer:quiz.answer,
            facts:quiz.facts,
            your_answer:quiz.userAnswer
        });
    }
});


app.listen(3000,() =>{
    console.log('Server running on http://localhost:3000');
});