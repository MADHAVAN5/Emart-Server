const mysql = require('mysql');

async function getDatabase(){
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "emart"
    });

    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    return conn;
}

module.exports = { getDatabase };