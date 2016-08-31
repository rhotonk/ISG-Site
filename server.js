ar express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('this is rendering!');
});

app.listen(8000, function(){
	console.log('server listening on port 8000');
});