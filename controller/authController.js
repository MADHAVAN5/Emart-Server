const dbo = require('../db');
let con = dbo.conn;

exports.signUp = async (req, res) => {
    var sql = `INSERT INTO users (name, password, phone, email ) VALUES ('${req.body.name}', '${req.body.password}',${req.body.phone},'${req.body.email}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send({ "status": true })
    });
}

exports.login = async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var sql = `SELECT * FROM users WHERE email='${email}'`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ "status": false, "message": "Email not Found" });
        } else if (password == result[0].password) {
            res.send({ "status": true, "message": "Login Success" });
        } else {
            res.send({ "status": false, "message": "Password Incorrect" });
        }
    });
}
