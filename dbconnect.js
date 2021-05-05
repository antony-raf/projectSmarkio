const mysql = require('mysql');

function getConnection(){
    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        passowrd:"thuglove3",
        database:"cadastrocomentarios"
    });
    return con;
}

module.exports.getConnection = getConnection;