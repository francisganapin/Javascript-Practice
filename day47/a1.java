public class a1 {

    String brand;
    String model;
    int year;

    public a1(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public void startEngine() {
        System.out.println(brand + " " + model + " engine started");
    }
}
