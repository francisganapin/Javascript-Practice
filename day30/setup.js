const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./users.db');


db.serialize(() =>{
    db.run(`CREATE TABLE IF NOT EXISTS user(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    
        )`);

        db.run(`INSERT OR IGNORE INTO USER (username,password) VALUES(?,?)`,['admin','1234']);
});

db.close();