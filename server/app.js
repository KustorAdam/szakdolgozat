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

app.post('/changepassword', (req, res) => {
    const plainTextPassword = req.body.password;
    let hashedpassword ="";
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        if (err) {
            console.log("Error in hash")
        } else {
            
            hashedpassword = hash
            
            const sql = ` UPDATE users SET Password = ?  WHERE id = ?` ;
            db.query(sql, [hashedpassword,req.body.userid], (err, data) => {
                if (err) {
                    console.error(err);
                    return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
                }


                return res.json(data)

    
    })
        
        }
});
    
})

app.post('/changeemail', (req, res) => {
    const sql = ` UPDATE users SET email = ?  WHERE id = ?` ;
    db.query(sql, [req.body.email,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/changephone', (req, res) => {
    const sql = ` UPDATE users SET phone = ?  WHERE id = ?` ;
    db.query(sql, [req.body.phone,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/changep_name', (req, res) => {
    const sql = ` UPDATE users SET p_name = ?  WHERE id = ?` ;
    db.query(sql, [req.body.p_name,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/changep_phone', (req, res) => {
    const sql = ` UPDATE users SET p_phone = ?  WHERE id = ?` ;
    db.query(sql, [req.body.p_phone,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/admincencalation', (req, res) => {
    const sql = 'SELECT * FROM cancelation';
    db.query(sql, [], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/deletecancelation', (req, res) => {
    const sql = 'DELETE FROM cancelation WHERE id=?';
    db.query(sql, [req.body.cancelationid], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/adminweeklyspecial', (req, res) => {
    const sql = 'SELECT * FROM weeklyspecial';
    db.query(sql, [], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/changebreakfast', (req, res) => {
    const sql = ` UPDATE weeklyspecial SET breakfast = ?  WHERE id = ?` ;
    db.query(sql, [req.body.newbreakfast,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/changelunch', (req, res) => {
    const sql = ` UPDATE weeklyspecial SET lunch = ?  WHERE id = ?` ;
    db.query(sql, [req.body.newlunch,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/changedinner', (req, res) => {
    const sql = ` UPDATE weeklyspecial SET dinner = ?  WHERE id = ?` ;
    db.query(sql, [req.body.newdinner,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/changeday', (req, res) => {
    const sql = ` UPDATE weeklyspecial SET day = ?  WHERE id = ?` ;
    db.query(sql, [req.body.newday,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})



app.post('/createnewuser', (req, res) => {
    const plainTextPassword = req.body.addpassword;
    let hashedpassword ="";
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        if (err) {
            console.log("Error in hash")
        } else {
            
            hashedpassword = hash
    const sql = `INSERT INTO users ( name,password,email,phone,p_name,p_phone,role_id) VALUES (?,?,?,?,?,?,?)`;
    db.query(sql, [req.body.addname,hashedpassword,req.body.addemail,req.body.addphone,req.body.p_name,req.body.p_phone,req.body.role_id], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)
    

    
    })
    }
})
})



app.listen(4004, () => {
    console.log("Listening...")
})