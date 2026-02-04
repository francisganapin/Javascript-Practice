public class a11{

    public static  void main(String[] args){
        String day = "Monday";

    int numLetterOld = 0;
    switch(day){
        case "MONDAY":
        case "FRIDAY":
        case "SUNDAY":
            numLettersOld = 6;
            break;
        case "TUESDAY":
            numLettersOld = 7;
            break;
        default:
            numLettersOld = -1;

    }
    int numLettersNew = switch(day){
        case "MONDAY","FRIDAY","SUNDAY" -> 6;

        case "TUESDAY" -> 7;
        
        default -> {
            System.out.println("Invalid Day");
            yield -1;
        }
    };

    }

    
}