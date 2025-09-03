export default function handler(req,res){
    if (req.method !== 'POST'){
        return res.status(405).json({message:"Method not Allowed"});
    }
    const { answer } = req.body;

    const quiz = {
        answer:"c",
        facts:"Capital of France is Paris",
    };

    if(!answer){
        return res.status(400).json({message:"Please provide an answer(a,b,c or d)"});
    }


    if (answer.toLowerCase() === quiz.answer){
        res.status(200).json({result:'Correct!'});
    }else{
        res.status(200).json({
            correct_answer:quiz.answer,
            facts:quiz.facts
        });
    }
}