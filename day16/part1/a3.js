const ages = [18,21,30,25];

if(ages.every(age => age >= 18)){
    console.log("All are adult"); 

}else{
    console.log('Atleast one was not adult')
}