public class a27{

    String brand;
    int price;


    public a27(String brand, int price){
        this.brand = brand;
        this.price = price;
    }
    public void show(){
        System.out.println(brand + " " + price);
    }
    public static void main(String[] args){

        a27 phone = new a27("Macbook", 20000);
        a27 laptop = new a27("Iphone", 10000);

        phone.show();
        laptop.show();

    }
}