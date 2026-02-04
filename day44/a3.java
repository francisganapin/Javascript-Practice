import java.util.List;
import java.util.stream.Collectors;


record User(String name,boolean active){}

public class a3{
    public static void main(String[] args){


        List<User> users = List.of(
            new User("user1",true),
            new User("user2",false),
            new User("user3",true)
        );

        List<String> userNames = users.stream()
        .filter(User::active)
        .map(User::name)
        .toList();

        System.out.println(userNames);

    }
}