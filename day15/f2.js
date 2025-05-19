fetch('http://127.0.0.1:5000/books')
    .then(response => {
        if(!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data =>{
        data.forEach(book => console.log(book.title));
    })
    .catch(error => console.error('Fetch error:',error));