public enum PaymentStatus {
    PENDING("Awaiting payment"),
    PROCESSING("Processing transaction"),
    COMPLETED("Payment successful"),
    FAILED("Payment failed"),
    REFUNDED("Payment refunded");
    
    private final String description;
    
    PaymentStatus(String description) {
        this.description = description;
    }
    
    public String getDescription() {
        return description;
    }
    
    public boolean isFinalized() {
        return this == COMPLETED || this == FAILED || this == REFUNDED;
    }
}