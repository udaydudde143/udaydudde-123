var fs = require ("fs");

fs.readFile('node2.txt',function (err,data) {

    if(err){
	    console.log(err.stack);
		return;
	}
	console.log(data.toString());
})
console.log("program ended");	