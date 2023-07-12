const dbo = require('../db');
let con = dbo.conn;

exports.getall = async (req, res) => {
    var sql = `SELECT * FROM category`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
}