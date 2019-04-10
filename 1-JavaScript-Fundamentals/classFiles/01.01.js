let string='javascript string';
let array=['eleven', 50, 'academy'];
//index #:   0        1     2
let three={type:"class"};

console.log(string);
console.log(array[0], array [2]);
console.log(three.type);

/*challenge 2
Make 7 variables: one is a string, one a number, one a boolean, one is undefined, one null, one
an array, and one an object.  Write a console.log message showing the type of each variable.  What
surprises you about this? */

let string='words words';
let seven=7;
let bool="true";
let notDefined=undefined;
let nothing=null;
let arr=[1, 2, 3, 4];
let obj={keyA: 'Zach', keyB: 'Scott'};

console.log(typeof string, typeof seven, typeof bool,typeof notDefined, typeof nothing, typeof arr, typeof obj);

/*
Challenge 3:
Make 2 variables.  The first is an array, the second is an object.  Inside each variable, 
store a string,
a number, a boolean, an undefined, a null, an array, and an object.
Once you've defined each variable, use console.log messages to output every value within 
your array and
your object.
*/

let NewArr=['word', 7, true, undefined, null, [1, 2, 3, 4], {type:'class'}];
let NewObj={str:'string', num: 5, bool: false, nope: undefined, none: null, 
ray: ['a', 'b', 'c'], obj: {name:'Becky'}};

console.log(NewArr[0], NewArr[1], NewArr[2], NewArr[3], NewArr[4], NewArr[5], NewArr[6]);
console.log(NewObj.str, NewObj.num, NewObj.bool, NewObj.nope, NewObj.none, NewObj.ray, 
    NewObj.obj);

