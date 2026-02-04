public class a25 {

    private String name;
    private int age;

    public void setName(String name){
        name = newName;
    }

    public String getName(){
        return name;
    }

    public void setAge(int newAge){
        if(newAge >= 0){
            age = newAge;
        }else{
            System.out.println("Invalid age");
        }
    }

    public int getAge(){
        return age;
    }
  
    public static void main(String[] args){
        a25 student = new a25();


        student.setName("Francis");
        student.setAge(22);
        student.setAge(-5);

        System.out.println("Name:" + student.getName());
        System.out.println("Age: " + student.getAge());
    }


}