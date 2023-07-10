const express = require('express');
const dbo = require('../db');


const router = express.Router();

router.get("/users", (req, res) => {
    let con = dbo.conn;
    con.query('SELECT * FROM users', function (err, result) {
        if (err) throw err;
        res.send(result);
    });

});

module.exports = router;