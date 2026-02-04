public class a26{

    String brand;
    int price;

    public a26(String brand, int price){
        this.brand = brand;
        this.price = price;
    }

    public void show(){
        System.out.println(brand + "" + price);
    }
    public static void main(String[] args){


        a26 phone = new a26("Macbook",10000);
        a26 laptop = new a26("Iphone",20000);


        laptop.show();  
        phone.show();
    }
}