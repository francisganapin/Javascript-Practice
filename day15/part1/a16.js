class Animal {
    speak(){
        console.log('Some animal sound ');
    }
}

class Dog extends Animal{
    speak(){
        console.log('arf ar');
    }
}

class Cat extends Animal{
    speak(){
        console.log('Meow')
    }
}

const animals = [new Dog(), new Cat()];
animals.forEach(a => a.speak());