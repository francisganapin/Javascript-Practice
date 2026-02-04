class Animal {
    void speak() {
        System.out.println("Animal Speaks");
    }
}

class Cat extends Animal {
    @Override
    void speak() {
        System.out.println("Cat Meows");
    }
}

public class a3 {
    public static void main(String[] args) {
        Cat c = new Cat();
        c.speak();

        Animal a = new Cat();   // polymorphism
        a.speak();
    }
}
