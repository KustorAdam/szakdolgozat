const express = require('express'); 
const mysql = require('mysql'); 
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const salt = 10;

const app = express();

app.use(express.json());
app.use(cors());

app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "" ,
    database: "kek_db"
})


app.post('/loginusers', (req, res) => {
    console.log(req.body.username)
    if (err) return res.json ("hiba")

    const sql = 'SELECT * FROM users WHERE name = ?';
    db.query(sql, [req.body.username], (err, data) => {
        console.log(data)
        if (err) return res.json({Error: "Bejelentkezési hiba a szerveren"});
        if(data.length > 0) {

            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => { 
                if(err) return res.json({Error: "Hibás jelszó!"});
                if (response)
                 { 

                        const id = data[0].id;
                        const role_id = data[0].role_id;

                        const token = jwt.sign({id, role_id}, "jwt-secret-key", {expiresIn: 84600});
                        res.cookie('token', token, { httpOnly: true });
                        console.log(token)
                        return res.json({ token });
                } else {
                    return res.json({Error: "Hibás Felhasználó vagy Jelszó"});
                }
            })
        } else {
        return res.json({Error: "Hibás Felhasználó vagy Jelszó"});
    }})
})

/*const plainTextPassword = 'admin123';
bcrypt.hash(plainTextPassword, salt, function(err, hash) {
    if (err) {
        // Handle error
    } else {
        // Store the hash in the database


    }
});*/





app.listen(4004, () => {
    console.log("Listening...")
})