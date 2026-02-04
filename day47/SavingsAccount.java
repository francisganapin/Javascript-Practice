public class SavingAccount extends BankAccount{
    double interestRate;



    public SavingAccount(String owner,double balance,double interestRate){


        super(owner,balance);

        this.interestRate = interestRate;
    }

    public double calculateTax(){
        return this.balance * 0.05;
    }
}