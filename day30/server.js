const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;


app.use(bodyParser.json());

const SECRET_KEY = 'mysecretkey';

const user = {
    id:1,
    username:'admin',
    'password':'1234'
};

// Login route - returns a JWT
app.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    if (username === user.username && password === user.password) {
      // Create token (expires in 1 hour)
      const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ message: "Login successful", token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
  

  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']; // "Bearer <token>"
    const token = authHeader && authHeader.split(' ')[1]; // split by space

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid Token" });
        }

        req.user = user; // attach user payload to request
        next();
    });
}


app.get("/protected",authenticateToken,(req,res) =>{
    res.json({message:"Welcome to the protected route!",user:req.user});
});

app.listen(port,() =>{
    console.log(`🚀 Server running at http://localhost:${port}`);
});