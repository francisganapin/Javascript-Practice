import java.util.Scanner;

public class a8{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number:");
        String input = scanner.nextLine();


        int number = Integer.parseInt(input);

        System.out.println("Your number: " + number);
        System.out.println("Thanks for using our app!");
        
    }
}