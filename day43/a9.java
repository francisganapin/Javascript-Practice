import java.util.Scanner;

public class a9{


    public static void printHeader(){
        System.out.println("=========================");
        System.out.println("   STUDENT GRADE SYSTEM  ");
        System.out.println("=========================");
    }
   
   public static double calculateAverage(int score1, int score2){
    double average = (score1 + score2) / 2.0;
    return average;
   }

   public static void main(String[] args){
    Scanner input = new Scanner(System.in);

    printHeader();

    System.out.print("Enter score 1");
    int s1 = input.nextInt();

    System.out.print("Enter score 2");
    int s2 = input.nextInt();

    double average = calculateAverage(s1,s2);

    System.out.println("Average score: " + average);

    if(average >= 75){
        System.out.println("Status:Passed");
    }else{
        System.out.println("Status:FAILED");
    }

   }
    
}

