public class a3{
    public static void main(String[] args){

        String result = "";

        for(int i = 0; i < 5; i++){
            result = result + i + ", ";
        }

        StringBuilder sb = new StringBuilder();

        for(int i = 0; i < 5; i++){
            sb.append(i).append(",");
        }

        String result2 = sb.toString();

        System.out.println(result);
        System.out.println(result2);
    }
}