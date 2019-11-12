var express = require('express');
var mysql = require('mysql');
var app = express();

app.get('/', function(request, response){
    var username = request.query.username;
    var password = request.query.password;
    var conn  =  mysql.createConnection({
      host: 'localhost' ,
      user: 'root',
      password: 'panwar' ,
      database: 'demo'
    });

    conn.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
     });
     var query ="insert into demo(username,password)values('&username', ' &password') ";
     conn.query(query,(err, result)=>{
       if (err) throw err;
	response.send({
		message:' congratulations you have successfully registered ',
		username:username
		})
                });
});

app.listen(8080);