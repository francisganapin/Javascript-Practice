def multiply(a):
    def inner(b):
        return a * b
    return inner


result = multiply(3)(4)
print(result)