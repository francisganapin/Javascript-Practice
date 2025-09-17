
fetch('http://127.0.0.1:5000/api/students')
    .then(response => response.json())
    .then(data => {
        const totalStudent = data.length;
        console.log(`Total student: ${totalStudent}`);
    })
    .catch(error => {
        console.log('Error fetching student data:',error);
    });