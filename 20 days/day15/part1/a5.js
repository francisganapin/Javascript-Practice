let message;
let login =  'Employee'

if(login =='Employee'){
    message = 'Hello';
} else if (login == 'Director'){
    message = 'Greetings';
} else if (login == ''){
    message = 'No login';
} else {
    message = '';
}

console.log(message)