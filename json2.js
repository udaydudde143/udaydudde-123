const fs = require ("fs");
fs.readFile("users1.json", function(err,data) {
    if(err) throw err;
	
	const users = JSON.parse(data);
	console.log(users);
	});