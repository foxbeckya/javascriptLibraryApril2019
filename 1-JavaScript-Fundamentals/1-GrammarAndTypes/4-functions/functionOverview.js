/* function rules
1) you only need parentheses to build a function and to call a function
2) almost always, you need {} around the function body
3) usually, you should 'return' from a function
4) not all functions need to have names

function ideas:
A) they are used for repeated chunks of code, but unlike loops, the repeats
    don't have to happen consecutively.
B) you need parameters in your functions when every time you use the function, 
    it could run in a slightly different way. 

    */

function print(){console.log(1)}  //print is a function that console logs what's in the parentheses

//print();

let print2 = () => {console.log(2)}  //print2 is a stand alone variable with a value of a function
//print2();

function printPicker(number, firstFunc, secondFunc){ //this will choose between print functions
//firstFunc is print, secondFunc is print2
if (number==0){
    firstFunc();
}else {
    secondFunc();
}
}
printPicker(1, print, print2);

function newFunc(param) {console.log(param)};

let firstVar=newFunc;
let secondVar=newFunc;
let thirdVar=newFunc;

firstVar('first log');
secondVar('second log');
thirdVar('third log'); 

let firstArrow= ()=>{console.log(20)};
let secondArrow=()=>{console.log(20)};

console.log(firstArrow==secondArrow); //false. b/c complex type.

let firstNum= 10;
let secondNum=10; 

console.log(firstNum==secondNum); //true, b/c primitives.

//there are 2 types of values in JS:
//primitives: numbers, strings, undefined, boolean
//complex: arrays, objects, functions
//when you check for equality on primitives, you're checking that they look the same
//when you check for equality on complex types, you're checking that they point to the same thing