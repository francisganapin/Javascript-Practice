import java.math.BigDecimal;



public class OrderItem{
    private String productId;
    private String productName;
    private int quantity;
    private BigDecimal unitPrice;


    public OrderItem(String productId, String productName,
        int quantity, BigDecimal unitPrice
    ){

        if(quantity <= 0){
            throw new IllegalArgumentException("Quantity must be positive");
        }

        if(unitPrice.compareTo(BigDecimal.ZERO) <= 0){
            throw new IllegalArgumentException("Price must be possitive");
        }

        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    public BigDecimal getSubtotal(){
        return unitPrice.multiply(new BigDecimal(quantity))
    }

    public String getProductId(){ return productId;}

    public String getProductName(){return productName;}

    public int getQuantity(){return quantity;}

    public BigDecimal getUnitPrice(){return unitPrice;}

    @Override
    public String toString(){
        return String.format("%s x %d @ $%.2f",
            productName, quantity, unitPrice);
    }
}