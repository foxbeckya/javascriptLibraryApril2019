// let prom = new Promise((resolve, reject) => {
//   if(5%2==1){
//     resolve('this is from the resolved promise'); 
//   }else
//   {reject('this is from the rejected promise ');
// }});

// prom
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error));

//console.log(Date.now());

let initTime=Date.now();

while (Date.now()-initTime<500){}

console.log('welcome to the page')