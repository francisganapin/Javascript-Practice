import java.util.function.Predicate;
import java.util.function.Consumer;
import java.util.function.Function;


public class a15{
    public static void main(String[] args){


        Predicate<String>isLong =(str) -> str.length() > 4;
        System.out.println(isLong.test("hello"));

        Function<String,Integer>getLength = String::length;
        System.out.println(getLength.apply("gago"));

        Consumer<String>printUpper = str -> System.out.println(str.toUpperCase());
        printUpper.accept("poging");
    }
}