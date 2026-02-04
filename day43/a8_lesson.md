# Lesson: Arrays (Storing Multiple Items)

Right now, if you want to store 5 student names, you have to do this:

```java
String name1 = "John";
String name2 = "Paul";
String name3 = "George";
// ... this gets messy fast!
```

**Arrays** let you store multiple values in **one** variable.

## The Concept

Think of an Array like a list or a row of lockers. Each locker has a number (Index), starting at **0**.

### Code for `a8.java`

This program will:

1. Create an array to store 5 names.
2. Ask the user to fill the array.
3. Print all the names back to the user.

```java
import java.util.Scanner;

public class a8 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
      
        // 1. Declare an Array of size 5
        // String[] means "Array of Strings"
        String[] students = new String[5]; 

        System.out.println("Enter 5 student names:");

        // 2. Loop to fill the array
        // arrays use .length to know their size
        for (int i = 0; i < students.length; i++) {
            System.out.print("Student " + (i + 1) + ": ");
            students[i] = input.nextLine(); 
        }

        System.out.println("\n--- Class List ---");

        // 3. Loop to read the array
        for (int i = 0; i < students.length; i++) {
            System.out.println("ID " + i + ": " + students[i]);
        }
    }
}
```

## How to insert this?

1. Create `a8.java`.
2. Type the code above.

## Pros and Cons of Arrays

### Pros

* **Efficient**: One variable name for 1000 items.
* **Loop-friendly**: You can process all data with a simple `for` loop.

### Cons

* **Fixed Size**: Once you make it `new String[5]`, it cannot hold 6 items. If you need it to grow, you need `ArrayList` (advanced topic).
* **Same Type**: You can't mix Strings and Integers in one array.
