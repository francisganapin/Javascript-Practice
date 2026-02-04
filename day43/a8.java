import java.util.Scanner;

public class a8{
    public static void main(String[] args){

        Scanner input = new Scanner(System.in);

        String[] students = new String[5];

        System.out.println("Enter 5 student names:");

        for(int i =0; i < students.length; i++){
            System.out.print("Student" + (i+1) + ": ");
            students[i] = input.nextLine();
        }

        System.out.println("\nStudent names:");

        for(int i =0; i < students.length; i++){
            System.out.println("ID" + (i+1) + ": " + students[i]);
        }
        
    }
}