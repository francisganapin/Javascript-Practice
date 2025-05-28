
function reverseString(str){
    let reversed = '';
    for(let i = str.lenght -1;i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString('hello'));