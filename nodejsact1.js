const async = require("async");

function areaOfRectangle(l,b){
     return new Promise((resolve)=>{
	       setTimeout(() =>{
		         resolve(l*b);
				 },2000);
				 });
				 }
async function output(l,b){
      const ans = await areaOfRectangle(l,b);
      console.log(ans);
}
output(5,6);
