fetch('http://127.0.0.1:5000/api/user/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
