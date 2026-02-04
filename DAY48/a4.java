class MathOp{

    public int add(int a, int b){
        return a + b;
    }

    public int add(int a, int b, int c){
        return a + b + c;
    }


}

public class a4{
    public static void main(String[] args){
        MathOp m = new MathOp();
        System.out.println(m.add(1,2));
        System.out.println(m.add(1,2,3));
    }
}