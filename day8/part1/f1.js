function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log(`Outer: ${outerVariable},Inner: ${innerVariable}`);
    };
}

const newFunction = outerFunction('Hello');
newFunction('World');