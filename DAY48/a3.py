class Animal:
    def speak(self):
        print("Animal speaking")

class Cat(Animal):
    def speak(self):
        print("Cat meowing")

    def walk(self):
        print("Cat walking")

c = Cat()
c.speak()
c.walk()