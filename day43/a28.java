// THE Static keyword (Shared Data)
// Some things belong to the class itself,not the indiviual objects
// Example: School name.



public class a29{
    String name;
    static String school;

    public static void main(String[] args){

        a29.school = "Havard";

        a29 s1 = new a29();
        s1.name = "Francis";

        a29 s2 = new a29();
        s2.name = "John";

        System.out.println(s1.name + "" + s1.school);
        System.out.println(s2.name + "" + s2.school);

        a29.school = "MIT";

        System.out.println(s1.name + "" + s1.school);
    }
}