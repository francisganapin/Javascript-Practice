public class a4{
    public static void main(String[] args){
        StringBuilder sb = new StringBuilder();


        sb.append("Hello");
        sb.append(" ");
        sb.append("World");
        sb.append(123);
        sb.append(true);

        System.out.println(sb.toString());

        StringBuilder sb2 = new StringBuilder()
            .append("Name: ")
            .append("Trisha ")
            .append(", Age: ")
            .append(25);


        System.out.println(sb2.toString());

    }
}