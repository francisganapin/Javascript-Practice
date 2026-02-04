public class Account{
    public String owner;
    public double balance;


    public Account(String onwer,double balance){
        this.owner = owner;
        this.balance = balance;
    }

    public void deposit(double amount){
        if(amount > 0){
            this.balance += amount;
        }
    }

    public double get_balance(){
        return this.balance;
    }

    public static void main(String[] args){
        Account acc = new Account("John",1000);
        System.out.println(acc.get_balance());
        acc.deposit(500);
        System.out.println(acc.get_balance());
    }

}