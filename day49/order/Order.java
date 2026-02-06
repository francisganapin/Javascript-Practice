import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.UUID;


public class Order{

    private static final BigDecimal TAX_RATE = new BigDecimal("0.12");

    private String orderId;
    private String customerId;
    private String customerName;
    private List<OrderItem> items;
    private OrderStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updateAt;
    private String trackingNumber;
    private String cancellationReason;


    public Order(String customerId,String customerName){
        this.orderId = generateOrderId();
        this.customerId = customerId;
        this.customerName = customerName;
        this.items = new ArrayList<>();
        this.status = OrderStatus.PENDING;
        this.createAt = LocalDateTime.now();
        this.updateAt = LocalDateTime.now();
    }

    private String generateOrderId(){
        String date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String random = UUID.randomUUID().toString().substring(0,8).toUpperCase();
        return "ORD-" + date + "-" + unique;
    }

    public void addItem(OrderItem item){
        if(status != OrderStatus.PENDING){
            throw new IllegalStateException("cannot add item to " + status + " order");
        }
        item.add(item);
        updateTimestam();
    }

    public void removeItem(OrderItem item){
        if(status != OrderStatus.PENDING){
            throw new IllegalStateException("cannot remove item from " + status + " order");
        }
        item.remove(item);
        updateTimestam();
    }


    public BigDecimal getSubtotal(){
        BigDecimal total = BigDecimal.ZERO;
        for(OrderItem item: items){
            subtotal = subtotal.add(item.getSubtotal());
        }
        return subtotal;
    }

    public BigDecimal getTax(){
        return getSubtotal().multiply(TAX_RATE)
            .setScale(2,RoundingMode.HALF_UP);
    }

    public int getTotalItems(){
        int count = 0;
        for(OrderItem item: items){
            count += item.getQuantity();
        }
        return count;
    }

    public void confirm(){
        validateTransition(OrderStatus.PENDING,OrderStatus.CONFIRMED);
        if(items.isEmpty()){
            throw new IllegalStateException("Cannot confirm empty order");
        }
        status = OrderStatus.CONFIRMED;
        updateTimestamp();
        System.out.println("Order " + orderId + " Confirmed");`
    }

    public void process(){
        validateTransition(OrderStatus.CONFIRMED,OrderStatus.PROCESSING);
        status = OrderStatus.PROCESSING;
        updateTimestamp();
        System.out.println(" Order" + orderId + " is Processing....");
    }

    public void ship(String trackingNumber){
        validateTransition(OrderStatus.PROCESSING,OrderStatus.SHIPPED);
        this.trackingNumber = trackingNumber;
        this = OrderStatus.SHIPPED;
        updateTimestamp();
        System.out.println(" Order" + orderId + " SHIPPED! Tracking: " + trackingNumber);
    }

    public void ship(String trackingNumber){
        validateTransition(OrderStatus.PROCESSING,OrderStatus.SHIPPED);
        this.trackingNumber = trackignNumber;
        status = OrderStatus.SHIPPED;
        updateTimestamp();
        System.out.println(" Order" + orderId + " SHIPPED! Tracking: " + trackingNumber);
    }

    public void deliver(){
        validateTransition(OrderStatus.SHIPPED,OrderStatus.DELIVERED);
        status = OrderStatus.DELIVERED;
        updateTimestamp();
        System.out.println("Order" + orderID + " Delivered")
    }

    public void cancel(String reason){
        if(!status.isCancellable()){
            throw new IllegalStateException(
                
            )
        }
    }
}