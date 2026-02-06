import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class a6{
    public static void main(String[] args){

        List<Integer> numbers = new ArrayList<>(List.of(5,2,8,1,9));

        Collections.sort(numbers);
        Collections.reverse(numbers);
        Collections.shuffle(numbers);


        int max = Collections.max(numbers);
        int min = Collections.min(numbers);
        int freq = Collections.frequency(numbers,5);

        System.out.println(max);
        System.out.println(min);
        System.out.println(freq);
    }
}