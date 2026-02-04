public class a12{
    public static void main(String[] args){


        String jsonOld = "{\n" +
        " \"name\": \"Francis\",\n" +
        " \"role\": \"Developer\",\n" +
        " \"";

        String jsonNew ="""
            {
                "name": "Francis",
                "role": "Developer",
                ""
            }
        """;

        System.out.println("OLD:\n" + jsonOld);
        System.out.println("New:\n" + jsonNew);

    }
}