import java.util.HashMap;
import java.util.Map;

public class a2{
    public static void main(String[] args){
        String input = "dog cat dog bird cat dog";
        String[] words = input.split(" ");

        Map<String,Integer> wordCounts = new HashMap<>();


        for(String word : words){
            if(wordCounts.containsKey(word)){


                int currentCount = wordCounts.get(word);
                wordCounts.put(word,currentCount + 1);

            }else{
                wordCounts.put(word,1);
            }
        }

        System.out.println("Word Counts: " + wordCounts);

    }
}