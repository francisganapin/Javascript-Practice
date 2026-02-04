import java.util.Scanner;

public class a5{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);


        int num1;
        while(true){
            System.out.print("Enter First Number: ");
            if(input.hasNextInt()){
                num1 = input.nextInt();
                break;
            }else{
                System.out.println("Invalid input insert again");
                input.next();
            }
        }

        int num2;
        while(true){
            System.out.print("Enter Second number: ");
            if(input.hasNextInt()){
                num2 = input.nextInt();
                break;
            }else{
                System.out.println("Invalid input. Enter a number only.");
                input.next();
            }
        }
        int sum = num1 + num2;
        System.out.println("The sum of " + num1 + " and " + num2 + " is " + sum);
    }
}