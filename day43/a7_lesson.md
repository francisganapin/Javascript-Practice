# Lesson: Creating a Menu System (Switch Case)

In the NC3 exam and real apps, you rarely just run a program once and it ends. You usually provide a **Menu** to the user so they can choose what to do.

## The Concept: `switch`
Instead of writing many `if (choice == 1) ... else if (choice == 2) ...`, Java has a cleaner way called `switch`.

### Code for `a7.java`

This program will:
1. Show a menu.
2. Ask the user to pick an option.
3. Perform the math based on the choice.
4. Repeat until the user chooses "Exit".

```java
import java.util.Scanner;

public class a7 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        while(true) {
            // 1. Display the Menu
            System.out.println("\n=== CALCULATOR MENU ===");
            System.out.println("1. Add");
            System.out.println("2. Subtract");
            System.out.println("3. Multiply");
            System.out.println("4. Exit");
            System.out.print("Choose an option: ");

            // 2. Get User Choice
            int choice = 0;
            if(input.hasNextInt()) {
                choice = input.nextInt();
            } else {
                input.next(); // Clear invalid input
                System.out.println("Invalid input! Please enter a number.");
                continue; // Skip to next loop iteration
            }

            // 3. Check Choice using SWITCH
            if (choice == 4) {
                System.out.println("Exiting...");
                break; // Stops the loop
            }

            // Ask for numbers only if we aren't exiting
            System.out.print("Enter First Number: ");
            int num1 = input.nextInt();
            System.out.print("Enter Second Number: ");
            int num2 = input.nextInt();

            switch(choice) {
                case 1:
                    System.out.println("Result: " + (num1 + num2));
                    break; // "break" prevents running case 2 automatically
                case 2:
                    System.out.println("Result: " + (num1 - num2));
                    break;
                case 3:
                    System.out.println("Result: " + (num1 * num2));
                    break;
                default:
                    System.out.println("Option not valid. Please choose 1-4.");
            }
        }
    }
}
```

## How to insert this?
1. Open `a7.java`.
2. Type the code above.

## Pros and Cons of `switch`

### Pros
*   **Cleaner**: Much easier to read than 10 `if/else` statements.
*   **Faster**: Slightly faster for the computer to process many options.
*   **Organized**: Great for menus (1, 2, 3, 4...).

### Cons
*   **Limited**: Can only check equality (e.g., `choice == 1`). You cannot check ranges like `if (age > 18)` inside a switch case easily.
*   **The "break" trap**: If you forget the `break;`, it will "fall through" and run the next case too! (Try removing a break and see what happens).
