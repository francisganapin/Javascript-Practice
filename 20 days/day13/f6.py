users = [
    {'name':'Alice','age':25},
    {'name':'bob','age':30}
]

adult = [user for user in users if user['age'] > 26 ]

print(adult)