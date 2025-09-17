

fetch('http://127.0.0.1:5000/api/students')
    .then(response => {
        if (!response.ok){
            throw new Error('HTTP ERROR! status: ${response.status}');
        }
        return response.json();
    })
    .then(data => {
        console.log('Student data',data);
    })
    .catch(error =>{
        console.error('fetch error:',error);
    });