public enum OrderStatus{
    PENDING("Awaiting confirmation"),
    CONFIRMED("Order confirmed"),
    PROCESSING("Being prepared"),
    SHIPPED("On the way"),
    DELIVERED("Delivered"),
    CANCELLED("Order Cancelled"),
    FAILED("Failed");


    private final String description;

    OrderStatus(String description){
        this.description = description;
    }

    public String getDescription(){
        return description;
    }


    public boolean isCancellable(){
        return this == PENDING || this == CONFIRMED;
    }

    public boolean isCompleted(){
        return this == DELIVERED || this == CANCELLED || this == FAILED;
    }
}