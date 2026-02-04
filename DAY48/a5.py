from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self,radius):
        self.radius = radius

    def area(self):
        return 3.4 * self.radius * self.radius

print(Circle(10).area())

class Rectangle(Shape):
    def __init__(self,lenght,breath):
        self.lenght = lenght
        self.breath = breath

    def area(self):
        return self.lenght * self.breath


print(Rectangle(10,20).area())


