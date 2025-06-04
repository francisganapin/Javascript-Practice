numbers = [4,9,16,25,29]


def my_function(value):
    return  value > 18


first = next((i for i,val in enumerate(numbers) if my_function(val)), -1)

print(first)