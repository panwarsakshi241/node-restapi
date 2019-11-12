var experss=require('express');
var mysql=require('mysql');
var app =express();

app.get('/',function(request,response){
	var question=request.query.question;
	var conn=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"panwar",			 
	database:"questions"
 });
conn.connect(function(err){
	if(err)throw err;
});

	var query="select * from questions where question=\""+ques +"\"";
	conn.query(query,(err,result)=>{
	     if (err) throw err;
	     console.log(result);
	});
});
app.listen(8080);