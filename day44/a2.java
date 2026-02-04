import java.util.ArrayList;
import java.util.List;


record User(String name,boolean active){
    public static void main(String[] args){


        List<User> users = new ArrayList<>();
        users.add(new User("user1",true));
        users.add(new User("user2",false));
        users.add(new User("user3",true));

        List<String> userNames = new ArrayList<>();

        for(User user:users){
            if(user.active()){
                userNames.add(user.name);
            }
        }

        System.out.println(userNames);


    }
}
