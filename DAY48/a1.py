class Dog:

    species = "Canis familiaris"

    def __init__(self,name,age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} say woof!"


my_dog = Dog("Buddy",3)
print(my_dog.bark())