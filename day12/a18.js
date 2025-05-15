let correctPassword = 'abc123';
let attempts = 0;
let input = "";


while (attempts < 3 && input !== correctPassword){
    input = prompt('Enter your password: ');
    attempts++;
}

if(input === correctPassword){
    console.log('Access granted');
}else{
    console.log('Access denied');
}