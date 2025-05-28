function greet(entity){
    entity.greet();
}

const robot = {
    greet(){
        console.log('Beep Boop');
    }
};

const human = {
    greet(){
        console.log('Hello!');
    }
};

greet(robot);
greet(human);