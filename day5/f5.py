def is_odd(number):
    return number % 2

def get_odd_numbers(*args):
    return list(filter(is_odd,args))

result = get_odd_numbers(10,1,3,4,8,9)
print(result)