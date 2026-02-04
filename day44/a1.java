import java.util.ArrayList;
import java.util.List;

class User{
    private String name;
    private boolean active;

    public User(String name,boolean active){
        this.name= name;
        this.active= active;
    }

    public String getName(){
        return name;
    }
    public boolean isActive(){
        return active;
    } 

}

public class a1{
    public static void main(String[] args){

    List<User> users = new ArrayList<>();
    users.add(new User("user1",true));
    users.add(new User("user2",false));
    users.add(new User("user3",true));


    List<String> userNames = new ArrayList<>();
    for(User user : users){
        if(user.isActive()){
            userNames.add(user.getName());
        }
    }

    System.out.println(userNames);
} }