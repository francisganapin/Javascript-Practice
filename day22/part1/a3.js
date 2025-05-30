fetch('http://127.0.0.1:5000/items',{
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body:JSON.stringify({items:['apple','banana','grape']})
})
.then(res => res.json())
.then(data => console.log(data));