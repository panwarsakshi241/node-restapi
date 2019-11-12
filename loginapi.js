var express = require('express');
var mysql = require('mysql');
var app = express();

app.get('/', function(request, response){
    var username = request.query.username;
    var password = request.query.password;
    var conn  =  mysql.createConnection({
      host: 'localhost' ,
      user: 'root',
      password: 'panwar',
      database: 'demo'
    });

    conn.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
     });
     var query = "Select * from demo where username=\""+username+ "\"";
     conn.query(query,(err, result)=>{
       if (err) throw err;
         if(result[0]){
           if(result[0].password== password)
           response.send({
             message: 'Successfully login',
             username: username
           })
           else {
             response.send({
               message: 'Password incorrect'
             });
           }

         }else{
           response.send({
             message: 'Username Does not exist'
           })
         }
     });


});


app.listen(8080);