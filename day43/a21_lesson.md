# Lesson: Class Attributes (The Data)

You saw in `a19` and `a20` that you can access `x` and change it. Use `.` to access attributes.

## 1. Multiple Objects
The power of classes is that you can create **many** objects from one "Blueprint". Each object has its OWN variables.

### Code for `a21.java`
```java
public class a21 {
    int x = 5;

    public static void main(String[] args) {
        a21 object1 = new a21();
        a21 object2 = new a21();

        object2.x = 25; // Change ONLY object2's x

        System.out.println("Object 1 x: " + object1.x); // Still 5
        System.out.println("Object 2 x: " + object2.x); // Is 25
    }
}
```

## 2. Real World Example (Multiple Attributes)
You usually don't just store `x`. You store real data like `name`, `age`.

### Code for `a22.java`
```java
public class a22 {
    // Attributes
    String firstName = "John";
    String lastName = "Doe";
    int age = 24;

    public static void main(String[] args) {
        a22 student = new a22();
        
        System.out.println("Name: " + student.firstName + " " + student.lastName);
        System.out.println("Age: " + student.age);
    }
}
```

## 3. `final` Attributes (Read-Only)
If you want an attribute that **cannot** be changed (like ID or PI), use `final`.

### Code for `a23.java`
```java
public class a23 {
    final int x = 10;
    
    public static void main(String[] args) {
        a23 myObj = new a23();
        // myObj.x = 25; // THIS WILL CAUSE AN ERROR!
        System.out.println(myObj.x);
    }
}
```

## How to insert this?
Try creating `a21.java`, `a22.java`, and `a23.java` to see how they differ.
