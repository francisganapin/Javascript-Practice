fetch('http://127.0.0.1:5000/api/students/1',{
    method:'DELETE',
    headers:{
        'Content-Type':'application/json'
    },
})
.then(response => {
    if(!response.ok){
        throw new Error(`Server error:${response.status}`);
    }
        return response.json();
})
.then(data => {
    console.log('Student Deleted',data);
})
.catch(error => {
    console.error(`Error posting student`,error);
});