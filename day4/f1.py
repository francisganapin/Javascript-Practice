def my_callback(quantity):
    return 'ok' if quantity > 200 else "low"

print(my_callback(250))
print(my_callback(150))