# OOP in Java - Part 2: The "Magic" Keywords

Now that you know the basics (Class, Object, Inheritance), let's look at the tools that make them powerful. We will use a **Bank Account** analogy because it's perfect for explaining `static` (shared data) and `super` (inheritance setup).

## 1. Constructors & `this`
In Django/Python, you use `__init__(self, ...)` to set up an object. In Java, we use **Constructors**.

### Rules
1.  Name must match the Class name **exactly**.
2.  No return type (not even `void`).

### Code Example
Saving this as `BankAccount.java`:

```java
public class BankAccount {
    String owner;
    double balance;

    // Constructor
    public BankAccount(String owner, double balance) {
        // 'this.owner' refers to the attribute
        // 'owner' refers to the parameter passed in
        this.owner = owner;
        this.balance = balance;
    }
}
```

## 2. The `super` Keyword
In Python, if you inherit, you often call `super().__init__()`. In Java, it's mandatory if the parent *needs* data to start.

Let's say we have a `SavingsAccount` that is a `BankAccount`.

### concept
`super(...)` calls the constructor of the Parent class. It **must** be the first line in the child constructor.

### Code Example
Saving this as `SavingsAccount.java`:

```java
public class SavingsAccount extends BankAccount {
    double interestRate;

    public SavingsAccount(String owner, double balance, double interestRate) {
        // Pass owner and balance UP to the parent (BankAccount) to handle
        super(owner, balance); 
        
        // Handle the child-specific data
        this.interestRate = interestRate;
    }
}
```

### PROS & CONS
*   **Pros**: DRY (Don't Repeat Yourself). You don't re-write logic to set `owner` and `balance`.
*   **Cons**: Rigid. You must respect the Parent's constructor requirements immediately.

## 3. `static` (Shared Memory)
This is a concept that often confuses Python devs.
*   **Instance Variable (Normal)**: Each object has its own copy (e.g., every account has a different `balance`).
*   **Static Variable**: **ONE** copy shared by **ALL** objects of that class.

If I change a static variable, it updates for *every* instance instantly.

### Code Example
Modify `BankAccount.java` to add a static bank name.

```java
public class BankAccount {
    // Shared by ALL accounts. If renamed, it changes for everyone.
    public static String bankName = "Django Bank"; 
    
    // ... existing code ...
}
```

### Usage
```java
// Access it via Class Name, not object variable
System.out.println(BankAccount.bankName); 
```

### PROS & CONS
*   **Pros**: efficient (memory saved), good for Constants or Counters.
*   **Cons**: Global state. If one part of your code changes it, it affects everything. Hard to debug.

## 4. Interfaces (The "Can-Do" Contract)
In Django, you might use Mixins to give a class extra powers. In Java, we use **Interfaces**.
An Interface doesn't have logic (mostly), it just lists methods a class **MUST** have.

### Concept
"I don't care if you are a `CheckingAccount` or a `BitcoinWallet`, if you implement `Taxable`, I can tax you."

### Code Example
1. Create `Taxable.java`:
   ```java
   public interface Taxable {
       // Any class using this MUST write a calculateTax method
       double calculateTax();
   }
   ```

2. Update `SavingsAccount` to use it:
   ```java
   // 'extends' comes first, then 'implements'
   public class SavingsAccount extends BankAccount implements Taxable {
       
       public SavingsAccount(String owner, double balance) {
           super(owner, balance);
       }

       // We MUST implement this or code won't compile
       public double calculateTax() {
           return this.balance * 0.05; // 5% tax
       }
   }
   ```

### PROS & CONS
*   **Pros**: Strong Design. You guarantee that certain classes have certain methods.
*   **Cons**: Verbose. If you add a method to the Interface later, you have to go fix EVERY class that implements it.

---

## Putting it all together (The "Runner")

Create `BankSystem.java` to test it all.

```java
public class BankSystem {
    public static void main(String[] args) {
        // 1. Static variable is available without creating an object
        System.out.println("Welcome to " + BankAccount.bankName);

        // 2. Creating objects using Constructor -> calls super()
        SavingsAccount myAcct = new SavingsAccount("Francis", 1000.0);
        
        // 3. Using Interface method
        System.out.println("Owner: " + myAcct.owner);
        System.out.println("Tax Due: " + myAcct.calculateTax());
    }
}
```
