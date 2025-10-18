let names: string = "Francis";
let age: number = 25;
let isMember:boolean = true;


function greet(person:string):string{
    return ` hello,{person}!`;
}

console.log(greet(names));