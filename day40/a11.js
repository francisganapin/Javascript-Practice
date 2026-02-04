class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.isLoggedIn = false;
    }
    login(){
        this.isLoggedIn = true;
        return `${this.name} is now logged in.`;
    }
    logout(){
        this.isLoggedIn = false;
        return `${this.name} is now logged out`;
    }
}

const user = new User('Alice','alice@example.com');
console.log(user.login());
console.log(user.isLoggedIn);