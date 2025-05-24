const users = [
    {'id':1,names:'Alice'},
    {'id':2,names:'Bob'}
];


if(users.some(user => user.names === 'Bob')){
    console.log('Bob exists');
}