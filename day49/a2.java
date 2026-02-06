public class a2{
    public static void main(String[] args) {
        PaymentStatus status = PaymentStatus.PENDING;
        System.out.println(status.getDescription()); 
        System.out.println(status.isFinalized());   
        
        PaymentMethod method = PaymentMethod.GCASH;
        System.out.println("Paying via: " + method);  
}
}