fetch('http://127.0.0.1:5000/api/students/1',{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
        age: 25,
        email: "Tarantado",
        name: "Francis Pogi" 
        
    })
})
.then(response =>{
    if(!response.ok){
        throw new Error(`Server error: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    console.log('Student update',data);
})
.catch(error => {
    console.error('Error posting student',error);
});