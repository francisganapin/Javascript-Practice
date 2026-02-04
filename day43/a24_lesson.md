# Lesson: Class Methods (Object Behavior)

Objects aren't just bags of data. They can also **DO** things.
*   **Attributes** = What the object KNOWS (name, age).
*   **Methods** = What the object DOES (speak, calculate).

## The Concept
You can write methods *inside* the class that use the class's own attributes.

### Code for `a24.java`

This program will:
1. Create a `Student` class.
2. Give it attributes (`fname`, `lname`).
3. Give it a method `introduce()` that prints usage those attributes.
4. Run it in `main`.

```java
public class a24 {
    // Attributes
    String fname;
    String lname;
    int age;

    // Method (The Behavior)
    public void introduce() {
        // We can access 'fname' directly because we are inside the class
        System.out.println("Hi, I am " + fname + " " + lname);
        System.out.println("I am " + age + " years old.");
    }

    // Main Method
    public static void main(String[] args) {
        // Create Object 1
        a24 student1 = new a24();
        student1.fname = "Francis";
        student1.lname = "Ganapin";
        student1.age = 20;

        // Create Object 2
        a24 student2 = new a24();
        student2.fname = "Juan";
        student2.lname = "Dela Cruz";
        student2.age = 25;

        // Call the method for each object
        System.out.println("--- Student 1 ---");
        student1.introduce(); // Prints Francis's info

        System.out.println("\n--- Student 2 ---");
        student2.introduce(); // Prints Juan's info
    }
}
```

## How into insert this?
Create `a24.java` and try the code above.

> [!NOTE]
> **Static vs Non-Static**:
> Notice `public void introduce()` does **NOT** have `static`.
> *   `static`: Belongs to the class (like `main`).
> *   No `static`: Belongs to the specific **object** (like `student1` vs `student2`).

### Quick Fixes for your previous files:
*   In `a22.java`, you wrote `public class a23`. The class name MUST match the filename (`a22`).
*   In `a22.java`, you used `myobj` (lowercase o) but created `myObj` (uppercase O). Java is case-sensitive!
