const mysql = require('mysql'); 
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { request } = require('express');
const salt = 10;
const express = require('express');

const app = express();

app.use(express.json());
app.use(cors());

app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "kek_db"
})


app.post('/cancelationadd', (req, res) => {
    console.log(req.body.userid)
    console.log(req.body.weeklysepcialid)
    if (err) return res.json("hiba")

    const sql = 'INSERT INTO cancelations WHERE'
})


app.post('/loginusers', (req, res) => {
    console.log(req.body.username)
    

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

app.post('/adminusers', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, [], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/adminuserdeactivation', (req, res) => {
    const sql = ` UPDATE users SET Enable = 0  WHERE id = ?` ;
    db.query(sql, [req.body.id], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/adminuseractivation', (req, res) => {
    const sql = ` UPDATE users SET Enable = 1  WHERE id = ?` ;
    db.query(sql, [req.body.id], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/adduser', (req, res) => {
    const plainTextPassword = req.body.password;
    let hashedpassword ="";
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        if (err) {
            console.log("Error in hash")
        } else {
            
            hashedpassword = hash
            
            const sql = `INSERT INTO users ( name,passowrd,email,phone,p_name,p_phone,role_id ) VALUES (?,?,?,?,?,?)`;
            db.query(sql, [req.body.username,hashedpassword,req.body.classid,req.body.enable,req.body.email,req.body.roleid], (err, data) => {
                if (err) {
                    console.error(err);
                    return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
                }


                return res.json(data)

    
    })
        
        }
});
    
})

app.post('/updateuser', (req, res) => {
    const sql = ` UPDATE users SET class_Id = ?  WHERE id = ?` ;
    db.query(sql, [req.body.class,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)
        
    
    })
})

app.post('/updatecancelation', (req, res) => {
    const sql = ` UPDATE users SET Email = ?  WHERE id = ?` ;
    db.query(sql, [req.body.email,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})
  

app.post('/receiveusername', (req, res) => {
    const sql = 'SELECT Username FROM users WHERE id=?';
    db.query(sql, [req.body.realuserid], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/menuthisweek', (req, res) => {
    const sql = 'SELECT * FROM weeklyspecial WHERE id BETWEEN 1 AND 5';
    db.query(sql, [], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/menunextweek', (req, res) => {
    const sql = 'SELECT * FROM weeklyspecial WHERE id BETWEEN 6 AND 10';
    db.query(sql, [], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})


app.post('/cancelday', (req, res) => {
    const sql = `INSERT INTO cancelation ( user_id,weeklyspecial_id) VALUES (?,?)`;
    db.query(sql, [req.body.studentid,req.body.weeklyspecial], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})



app.listen(4004, () => {
    console.log("Listening...")
})