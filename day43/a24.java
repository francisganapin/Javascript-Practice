public class a24{

    String fname;
    String lname;
    int age;

    public void introduce(){

        System.out.println("Hi, I am " + fname + " " + lname);
        System.out.println("I am " + age + " years old.");
    }

    public static void main(String[] args){


        a24 student1 = new a24();
        student1.fname = "John";
        student1.lname = "Doe";
        student1.age = 24;


        a24 student2 = new a24();
        student2.fname = "Francis";
        student2.lname = "Pogi";
        student2.age = 22;

        System.out.println("Student 1");
        student1.introduce();

        System.out.println("Student 2");
        student2.introduce();
    }


}