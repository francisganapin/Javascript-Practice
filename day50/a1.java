import java.util.HashMap;

public class a1{
    public static void main(String[] args){

        HashMap<String,Integer> age = new HashMap<>();

        age.put("trisha",25);
        age.put("Gago",28);
        age.put("Tae",30);

        int trishaAge = age.get("trisha");
        System.out.println(trishaAge);

    }
}