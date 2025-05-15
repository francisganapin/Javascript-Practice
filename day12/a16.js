let i = 1;

while (i <= 100){
    if(i % 7 === 0){
        console.log('Found one divisible by 7:',i);
        break;
    }
    i++;
}