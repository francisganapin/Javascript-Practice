function* idGenerator(){
    let id=1;
    while(true){
        yield id++;
    }
}

const gen = idGenerator();



let i = 0;


while (i < 11){
    if (i === 3){
        i++;
        continue;
    }
    console.log(gen.next().value);
    i++;
}