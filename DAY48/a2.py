class Account:
    def __init__(self,owner,balance):
        self.owner = owner
        self.__balance = balance

    def deposit(self,amount):
        if amount > 0:
            self.__balance += amount
            print(f"Added {amount} to the balance")
        else:
            print("Deposit amount must be positive")

    
    def get_balance(self):
        return self.__balance


acc = Account("John",1000)
print(acc.get_balance())
acc.deposit(500)
print(acc.get_balance())