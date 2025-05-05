const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/',(req,res) =>{
    const data = 'Hello from server console'
    console.log(data)
    
    res.render('index',{message:data})
})

app.listen(port,() =>{
    console.log(`Server running at http://localhost:${port}`)
})