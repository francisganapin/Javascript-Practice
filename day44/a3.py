from dataclasses import dataclass

@dataclass
class User:
    name:str
    active:bool


users = [
    User('user1',True),
    User('user2',False),
    User('user3',True)
]

user_name = [
    u.name for u in users if u.active
]

print(user_name)