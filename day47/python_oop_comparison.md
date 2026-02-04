# OOP Comparison: Java vs Python

Here is the direct translation of your Java code into Python. Since you are a Django dev, you'll see how much "magical boilerplate" Python removes.

## The Python Equivalent

Save this as `bank.py` to test it.

```python
from abc import ABC, abstractmethod

# 1. Interface (Taxable)
# Python doesn't have "interface". We use Abstract Base Classes (ABC)
# to enforce that children MUST implement a method.
class Taxable(ABC):
    @abstractmethod
    def calculate_tax(self):
        pass

# 2. Parent Class (BankAccount)
class BankAccount:
    # Constructor
    def __init__(self, owner, balance):
        # 'self' is explicit (unlike invisible 'this' in Java)
        self.owner = owner
        self.balance = balance

# 3. Child Class (SavingAccount)
# Inherits from BankAccount AND Taxable
class SavingAccount(BankAccount, Taxable): 
    
    def __init__(self, owner, balance, interest_rate):
        # 'super' handles the parent init
        super().__init__(owner, balance)
        self.interest_rate = interest_rate

    # Implementation of the "Interface" method
    def calculate_tax(self):
        return self.balance * 0.05

# --- usage ---
if __name__ == "__main__":
    # No 'new' keyword
    acc = SavingAccount("Francis", 1000.0, 0.02)
    
    print(f"Owner: {acc.owner}")
    print(f"Tax: {acc.calculate_tax()}")
```

## Key Differences & Explanations

### 1. `interface` vs `ABC`
*   **Java**: Start with `public interface`. Strict contract.
*   **Python**: We inherit from `ABC` and use the `@abstractmethod` decorator.
*   *Django Context*: You rarely write ABCs in Django. You typically just inherit from `models.Model`. Django uses "Mixins" (simple classes) instead of formal interfaces for shared behavior.

### 2. `this` vs `self`
*   **Java**: `this` is implicit. You only type it if there's a naming conflict (`this.owner = owner`).
*   **Python**: `self` is **explicit**. You must pass it as the first argument to every instance method.

### 3. `extends` vs `(Parent)`
*   **Java**: `class Child extends Parent implements Interface`.
*   **Python**: `class Child(Parent, Interface)`. Python supports **Multiple Inheritance** (inheriting from multiple classes), whereas Java only allows extending ONE class (but implementing many interfaces).

### 4. Types
*   **Java**: `double balance`. You defined the type.
*   **Python**: Just `balance`. Python is dynamic.

## Pros & Cons (Python approach)

*   **Pros**:
    *   **Speed**: Much faster to write. Less boilerplate.
    *   **Flexibility**: You don't *have* to use an Interface/ABC. If an object has a `.calculate_tax()` method, Python will happily run it (Duck Typing), even if it doesn't "formally" implement the interface.
*   **Cons**:
    *   **Safety**: In Java, if you forget to implement `calculateTax`, the code **won't compile**. In Python, it might crash at runtime unless you use tools like `mypy` or strictly use ABCs.

## A Note on your Java File
In your Java code, you named the class `SavingAccount` (in the code) but the file might be `SavingsAccount.java` (plural).
**Rule in Java**: The `public class Name` **MUST** match the `Name.java` filename exactly.
*   Class: `SavingAccount` -> File: `SavingAccount.java`
*   Class: `SavingsAccount` -> File: `SavingsAccount.java`
Make sure they match or compile will fail!
