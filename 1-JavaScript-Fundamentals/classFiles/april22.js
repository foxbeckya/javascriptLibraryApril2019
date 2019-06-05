/*Challenge 1 (Arrays, Array Methods):
Make an array that stores numbers.  Using Array.prototype.forEach(), add a random
number amount to the value of every element in the array.  Console.log your array
to confirm that it worked.*/

let arr=[1, 2, 3, 4, 5];
let newArr=[];
arr.forEach((value) => newArr.push(value + Math.random()))
console.log(newArr);


//challenge 2

let obj = {
  keyA:'1150',
  keyB: 1150,
  keyC: undefined,
  keyD: null,
  keyE: [1,2,3]
}

const objPlay = (object) => {
  let keys = Object.values(object); 
  let returnArr = []; 
  for (let i = 0; i < keys.length; i++){ 
    if (i % 2 == 1){
      returnArr.push(keys[i]) 
    }
  }
  return returnArr;
}

console.log(objPlay(obj));

let num=1;
num++;
console.log(num);