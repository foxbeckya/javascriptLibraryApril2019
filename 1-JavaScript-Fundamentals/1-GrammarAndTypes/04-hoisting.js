/*
HOISTING

1-grammarAndTypes
    04-hoisting.js
*/

//example 1:
console.log(scissors);
var scissors = 'blue';

//example 1 breakdown: variable gets hoisted to top. definition of variable after it gets called--> undefined
var scissors;
console.log(scissors);
scissors = 'blue';

//example 2:
function hoistTest(){
    console.log(testVar);  //undefined. variables hoist inside functions.
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//example 2 breakdown:
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();

//dont use var before it's defined.