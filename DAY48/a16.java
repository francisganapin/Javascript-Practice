import java.util.List;
import java.util.stream.Collectors;


public class StreamDemo{
    public static void main(String[] args){
        List<String> names = List.of("Francis","John","Alice","Bob","Anna");


        System.out.println("----Old Way -------");
        for (String name: names){
            if(name.startsWith("A")){
                System.out.println(name.toUpperCase());
            }
        }

        System.out.println("\n--- New Way (Stream) ----");
        List<String> result = names.stream()
        .filter(name -> name.startsWith("A"))
        .map(String::toUpperCase)
        .sorted()
        .collect(Collectors.toList());

        
        result.forEach(System.out::println);


    }
}