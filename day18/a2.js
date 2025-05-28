let role = 'editor';

if(role === 'admin'){
    console.log('Welcome admin! full access granted.');
}else if (role === 'editor'){
    console.log('Welcome editor! limited access granted.');
}else{
    console.log('Access denied');
}