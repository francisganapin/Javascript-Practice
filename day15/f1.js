const { response } = require("express");

fetch('http://127.0.0.1:5000/books')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:',error));