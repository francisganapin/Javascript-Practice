import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class a7 {
    public static void main(String[] args) {

        List<Integer> nums = new ArrayList<>(List.of(1, 2, 3, 4, 5));

        Iterator<Integer> it = nums.iterator();

        while (it.hasNext()) {
            int value = it.next(); 
            System.out.println(value);

            if (value % 2 == 0) {
                it.remove();
            } else {
                System.out.println("None");
            }
        }

        System.out.println(nums);
    }
}
