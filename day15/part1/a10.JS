class BankAccount{
    #balance = 0;

    constructor(owner){
        this.owner = owner;
    }
    deposit(amount){
        if (amount > 0) this.#balance += amount;
    }
    getBalance(){
        return this.#balance;
    }
}

const acc = new BankAccount('WellKrea');
acc.deposit(1000);
console.log(acc.getBalance());

