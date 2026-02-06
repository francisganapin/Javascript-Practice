import java.util.HashMap;
import java.util.Map;

public class HashMapExample{
    public static void main(String[] args){

        Map<String,String> settings = new HashMap<>();
        settings.put("theme","dark");
        settings.put("notification","enabled");

        String theme = settings.get("theme");
        String notification = settings.get("notification");

        System.out.println("Theme: " + theme);
        System.out.println("Notification: " + notification);

        if(settings.containsKey("theme")){
            System.out.println("Theme is present");

        }

        for(Map.Entry<String,String> entry: settings.entrySet()){
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        settings.remove("theme");
        System.out.println("After removing theme: " + settings);
    }
}