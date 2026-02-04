class MathOp:

    def add(self,a,b,c=None):
        if c is None:
            return a + b 
        return a + b

m = MathOp()
print(m.add(1,2,3))
print(m.add(1,2))