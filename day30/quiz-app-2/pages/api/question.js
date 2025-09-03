export default function handler(req,res){
    const quiz ={
        question:"What is capital of France",
        option:{
            a:'Berlin',
            b:"Madrid",
            c:"Paris",
            d:"Rome"
        }
    };

    res.status(200).json(quiz);
}