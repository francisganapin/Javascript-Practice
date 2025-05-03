function myFunction(theObject){
    theObject.make ="Toyota";
}


const myCar ={
    make:'Honda',
    model:'Accord',
    year:1998,
};

console.log(myCar.make);
myFunction(myCar);
console.log(myCar.make);