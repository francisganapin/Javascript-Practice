function checkAge(age){
    if(age >= 18){
        return 'Allowed';
    }else{
        return 'Denied';
    }
}

console.log(checkAge(20));