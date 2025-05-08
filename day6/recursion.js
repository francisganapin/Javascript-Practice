function countnum(num){
    if(num <= 0) return;
    console.log(num);
    countnum(num-1);
}

countnum(5);