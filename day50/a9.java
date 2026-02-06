import java.util.Scanner;


public class a9{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your nnumber: ");
        String input = scanner.nextLine();

        try{
            int number = Integer.parseInt(input);
            System.out.println("Your number: " + number);
        }catch(NumberFormatException e){
            System.out.println("Oops !" + input + " is not a valid number. try Again");
        }

        System.out.println("Thanks for using our app!");


    }
}