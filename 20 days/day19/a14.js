let user = {
    name: "francis",
    password: "12345"
  };


let inputName = "francis";
let inputPassword = '12345';


if(inputName === user.name && inputPassword === user.password){
    console.log('Login successful!');
}else{
    console.log('Invalid credential');
}