const async = require("async");

function cubeOfNumber(n){
     return new Promise((resolve)=>{
	       setTimeout(() =>{
		         resolve(n*n*n);
				 },2000);
				 });
				 }
async function output(n){
      const ans = await cubeOfNumber(n);
      console.log(ans);
}
output(7);