const express = require('express')
const app = express()
const admin = express()
const port = 3000;








admin.get('/',(req,res)=>{
    console.log(admin.mountpath)
    res.send('admin homepage')
})


app.use('/admin',admin);

app.listen(port,() =>{
    console.log(`Express running at http://localhost:${port}`) 
 });