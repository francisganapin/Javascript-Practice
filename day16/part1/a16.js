const grades = [90,75,60,40];

grades.map(grade => {
    if(grade >= 75){
        console.log(`pass: ${grade}`);
    }
    else{
        console.log(`Fail: ${grade}`);
    }
});