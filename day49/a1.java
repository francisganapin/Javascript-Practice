import java.math.BigDecimal;
import java.math.RoundingMode;
public class a1{
    public static void main(String[] args){

        double wrongPrice = 19.99;
        double wrongTotal = wrongPrice * 2.9;


        BigDecimal price = new BigDecimal("19.99");
        BigDecimal quantity = new BigDecimal("2.9");
        BigDecimal correctTotal = price.multiply(quantity);


        System.out.println("Total: $" + correctTotal);

        BigDecimal tax = correctTotal.multiply(new BigDecimal("0.12"));
        tax = tax.setScale(2,RoundingMode.HALF_UP);
        System.out.println("Tax (12%): $" + tax);
    }
}