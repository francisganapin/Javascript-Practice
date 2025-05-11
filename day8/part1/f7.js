function* generatorFunction(){
    yield 'First';
    yield 'Second';
    return 'Finished';
}

const gen = generatorFunction();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);