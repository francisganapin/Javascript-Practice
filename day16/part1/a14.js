const orders = [
    {id:1,items:['apple'] },
    {id:2,items:['mango'] }
];

if(orders.some(order => order.items.includes('banana'))){
    console.log('At least one order contains banana.');
}else{
    console.log('No banana on container')
}