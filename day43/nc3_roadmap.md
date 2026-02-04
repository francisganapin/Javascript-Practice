# NC3 Java Programming Roadmap

To pass NC3 (National Certificate III) for Java, you need to verify you can build a complete desktop application with a database. Here is the step-by-step path:

## 1. Input & Output (The Immediate Next Step)
You know how to hardcode numbers (`int a = 10`). Now you need to accept input from a user.

### Code: User Input (Scanner)
```java
import java.util.Scanner; // Import the Scanner class

public class a4 {
    public static void main(String[] args) {
        // Create a Scanner object interact with command line
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int num1 = input.nextInt(); // Read user input

        System.out.print("Enter second number: ");
        int num2 = input.nextInt(); // Read user input

        int sum = num1 + num2;
        System.out.println("The sum is: " + sum);
    }
}
```

#### Pros and Cons
*   **Pros**: Makes your program interactive. Users can calculate different numbers without changing the code.
*   **Cons**: You have to handle errors (what if they type "abc" instead of specific number?).

---

## 2. Control Flow (Logic)
*   **If/Else**: Making decisions (e.g., login success vs failed).
*   **Loops**: Repeating tasks (e.g., listing all students).

## 3. Object Oriented Programming (OOP) - *Critical*
This is the core of NC3. You cannot just write everything in `main`.
*   **Classes & Objects**: Grouping data (e.g., `Student` class with `name`, `age`).
*   **Inheritance**: `Student` extends `Person`.
*   **Encapsulation**: Using `private` variables and `public` methods (getters/setters).

## 4. Database Connectivity (JDBC) - *The Hardest Part*
NC3 exams usually require connecting your Java app to a MySQL database.
*   **JDBC**: How to send SQL commands like `SELECT` and `INSERT` from Java.

## 5. GUI (Graphical User Interface)
You will likely need to build visual forms, not just black screen terminal apps.
*   **Swing** or **JavaFX**: Buttons, TextFields, Tables.
