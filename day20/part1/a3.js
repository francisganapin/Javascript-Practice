const temperature = [35,22,28,40,18,30];


for(let temp of temperature){
    if(temp > 30){
        console.log(temp + " C is hot");
    }else if (temp >= 20 && temp <= 30){
        console.log(temp + " C is warm");
    }else{
        console.log(temp + " C is cold");
    }
}