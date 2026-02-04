import java.util.Scanner;


public class a6{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);


        int num1;
        while(true){
            System.out.print("Enter a number: ");
            if(input.hasNextInt()){
                num1 = input.nextInt();
                break;

            }else{
                System.out.println("Invalid Input. Enter a number only.");
                input.next();
            }

        }

        int num2;
        while(true){
            System.out.print("Enter a number: ");
            if(input.hasNextInt()){
                num2 = input.nextInt();
                break;
            }else{
                System.out.println("Invalid Input. Enter a number only.");
                input.next();
            }
        }
        int sum = num1 * num2;
        System.out.println("The product of " + num1 + " and " + num2 + " is " + sum);
    }
}