import java.util.HashMap;
import java.util.Map;

public class a2{
    public static void main(String[] args){

        Map <String,Integer> score = new HashMap<>();

        score.put("Math",95);
        score.put("Physics",90);
        score.put("Chemistry",95);

        for(Map.Entry<String,Integer> entry : score.entrySet()){
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

    }
}