import java.io.FileNotFoundException;
import java.io.File;
import java.io.PrintWriter;
import java.util.Scanner;
import java.io.IOException;

class a10 {

    public static void main(String[] args) {

        try {
            readFile("user_data.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Error: File not found!");
            createNewFile("user_data.txt");
        }
    }

    static void readFile(String name) throws FileNotFoundException {
        File file = new File(name);
        Scanner sc = new Scanner(file);

        while (sc.hasNextLine()) {
            System.out.println(sc.nextLine());
        }

        sc.close();
    }

    static void createNewFile(String name) {
        try {
            PrintWriter pw = new PrintWriter(name);
            pw.println("New file created.");
            pw.close();
            System.out.println("File created successfully.");
        } catch (IOException e) {
            System.out.println("Cannot create file.");
        }
    }
}
