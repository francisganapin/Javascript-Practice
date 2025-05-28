
const temperature = [3,15,25,32,10];


for (let temp of temperature){
    if(temp <= 10){
        console.log(temp + ' C is freezing');
    }else if (temp <= 19){
        console.log(temp + ' C is cold');
    }else if(temp <= 30){
        console.log(temp + ' C is warm');
    }else {
        console.log(temp + ' C is hot');
    }
}