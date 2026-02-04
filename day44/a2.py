from dataclasses import dataclass

@dataclass
class User:
    name:str
    active:bool

users =[
    User("user1",True),
    User("user2",False),
    User("user3",True)
]

user_name = []

for user in users:
    if user.active:
        user_name.append(user.name)


print(user_name)