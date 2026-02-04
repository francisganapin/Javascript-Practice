class Animal:
    def __init__(self,name,type):
        self.name = name
        self.type = type

    def speak(self):
        return f"{self.name} the smart {self.type} say hello"
    

dog = Animal("buddy","dog")
print(dog.speak())
print(dog.type)