fetch('http://127.0.0.1:5000/api/students',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        id:26,
        name:'Patricia Gago',
        age:23,
        email:'Partman.lim@gagod.com'
    })
})
.then(response => {
    if(!response.ok){
        throw new Error(`Server error: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('Student added',data);
})
.catch(error => {
    console.error('Error posting student',error);
});