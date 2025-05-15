let hour = new Date().getHours();
let names = 'Well Nice';

if (hour < 12 ){
    console.log(`Good morning ${names}`)
} else if (hour < 18){
    console.log(`Good after noon ${names}`)
} else{
    console.log(`Good evening ${names}`)
}