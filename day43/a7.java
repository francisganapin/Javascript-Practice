import java.util.Scanner;

public class a7{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        while(true){
            System.out.println("\n=== Calculator ===");
            System.out.println("1. Add");
            System.out.println("2. Subtract");
            System.out.println("3. Multiply");
            System.out.println("4. Exit");


            int choice = 0;
            if(input.hasNextInt()){
                choice = input.nextInt();
            }else{
                input.next();
                System.out.println("Invalid Input.Enter please a number");
                continue;
            }

            if(choice == 4){
                System.out.println("Existing....");
                break;
            }
            System.out.print("Enter first Number: ");
            int num1 = input.nextInt();
            
            System.out.print("Enter Second Number: ");
            int num2 = input.nextInt();
         
           switch(choice){
            case 1:
                System.out.println("Result: " + (num1 + num2));
                break;
            case 2:
                System.out.println("Result: " + (num1 - num2));
                break;
            case 3:
                System.out.println("Result: " + (num1 * num2));
                break;
            default:
                System.out.println("Invalid Choice");
        
           }
        }
    }
}