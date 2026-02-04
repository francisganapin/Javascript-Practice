import java.util.concurrent.ThreadLocalRandom;
import java.util.List;
import java.util.ArrayList;


public class Probability{

    public static boolean simulateEvent(double probability){
        return ThreadLocalRandom.current().nextDouble() < probability;
    }

    public static void main(String[] args){
        
        if(simulateEvent(0.7)){
            System.out.println("It rains");
        }else{
            System.out.println("It does not rain");
        }

        String result = getWeightedChoice();
        System.out.println("Choos Color:" + result);

    }
    public static String getWeightedChoice(){

        double p = ThreadLocalRandom.current().nextDouble();
        if(p < 0.5) return "Red";
        if(p < 0.8) return "Green";
        return "Blue";

        }
    
}