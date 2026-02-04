public class PatternMatching{
    public static void main(String[] args){
        Object obj = "Hello";

        if(obj instanceof String){
            String str = (String) obj;
            System.out.println("Old " + str.toUpperCase());
        }

        if(obj instanceof String str){
            System.out.println("New " + str.toUpperCase());
        }
    }
}