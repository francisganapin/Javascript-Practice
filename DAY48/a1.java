public class a1{

    public static String species = "Canis familiaris";

    String name;
    int age;

    public a1(String name, int age){
        this.name = name;
        this.age = age;

    }

    public String bark(){
        return this.name + " say woof!";
    }

    public static void main(String[] args){
        a1 myDog = new a1("Buddy",3);
        System.out.println(myDog.bark());
    }
}