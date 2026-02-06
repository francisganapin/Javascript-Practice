import java.util.ArrayList;

public class a5{
    public static void main(String[] args){

        ArrayList<String> name = new ArrayList<>();
        name.add("Alice");
        name.add("Bob");
        name.add("Charlie");

        String first = name.get(0);

        System.out.println(first);
    }
}