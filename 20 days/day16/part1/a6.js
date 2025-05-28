const scores = [80,90,70,85];


const highScore = scores.filter(score => score >= 85);

if(highScore.length > 0){
    console.log('there are high scores',highScore)
}