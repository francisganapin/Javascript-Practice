const user = {
    names:'Wheyl',
    address:{
        city:'Manila',
        zip:1000
    }
};

if(user?.address?.city === 'Manila'){
    console.log('User is from Manila');
}