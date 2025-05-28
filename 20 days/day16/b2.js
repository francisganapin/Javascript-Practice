const order = {
    item:['protein','bottle'],
    status:'pending',
    user:{name:'Whely',verified:true}
};


if (
    order.status === 'pending' &&
    order.user.verified &&
    order.items.includes('protein')
  ) {
    console.log('Ready to ship!');
  }