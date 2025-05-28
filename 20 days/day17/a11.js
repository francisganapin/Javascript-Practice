let user = {
    firstName:'Juan',
    lastName:'Dela Cruz',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        [this.firstName,this.lastName] = value.split('');
    }
};

console.log(user.fullName);
user.fullName = 'Maria Clara';
console.log(user.firstName);