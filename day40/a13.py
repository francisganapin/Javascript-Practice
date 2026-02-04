class Dog(Animal):  # Inherits from Animal
    def __init__(self, name, breed):
        super().__init__(name, 'Dog')  # Call parent __init__
        self.breed = breed
    
    def speak(self):  # Override method
        return f"{self.name} barks!"

dog = Dog('Buddy', 'Golden Retriever')
print(dog.speak())  # Output: Buddy barks!