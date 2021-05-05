const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const con = require("./dbconnect")

// Static
app.use(express.static('public'));

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/public/index.html'));

    var conn = con.getConnection();

    conn.query('SELECT * FROM cadastrocomentarios.comments', function(error, results, fields){
        if(error) throw error;

        results.forEach((comments)=>
        {
            console.log(comments);
        });    
    });

    conn.end();
})

app.use('/',router);
app.listen(8081, function(){
    console.log('Servidor Funcionando!');
});
