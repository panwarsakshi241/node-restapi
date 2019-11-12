var express =require('express');
var app= express();

app.get('/',function(request,response){
	var name=request.query.name;
	var surname=request.query.surname;
response.send({
	name:name,
	surname:surname
});
});

app.listen(8080);