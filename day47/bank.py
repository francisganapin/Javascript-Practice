from abc import ABC, abstractmethod


class Taxable(ABC):
    @abstractmethod
    def calculate_tax(self):
        pass


class BankAccount:
    def __init__(self,owner,balance):
        self.owner = owner
        self.balance = balance

class SavingAccoung(BankAccount,Taxable):