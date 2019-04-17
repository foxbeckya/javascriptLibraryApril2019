for (let i = 0; i<10; i++){
    console.log(i);
}

//for-in example 1
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing){ //enumerable collections
console.log (thing); //this output shows the position numbers of the elements in the array
}

//for-in example 2
let parentThing = [ 1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing){ //enumerable collections
console.log (parentThing([thing])); //this output shows the elements in the array
}

//thing references the index number. putting it in square brackets calls the value

//for-in example 3
let obj = {keyA: true, keyB: 'Alan', keyC: [1, 2, 3,]};
for (let placeholder in obj){
    console.log (obj[placeholder]);
    console.log (obj['keyA']);
}
//dot notation looks for something with that exact name (obj.placeholder)

let obj2 = {first: '1150 academy', second: 1150, third: false};
for(let thing in obj2){
    console.log(obj2[thing]);
}
 
/*
Challenge 1:
Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  
The function should
console.log a random number between 0 and 1.  Once you've completed the challenge with a 
for-loop, see if
you can make this work with a for-of loop.  If you can solve that problem, see if you can 
solve this with
a for-each loop.  Note that for-of and for-each loops require slightly different conditions 
to work than
a for loop requires.
*/

for (let i=0; i <10; i++){
 randNumber();
}

function randNumber(){
    console.log (Math.random());  //Math.random gives random number between 0-1
}


//mini-challenge
//make a function that takes 2 parameters (inside parentheses): favFood & favDessert.
//your function should return a sentence with those two paramenters inside. 

function food (favFood, favDessert) {
    return `My favorite food is ${favFood} and my favorite dessert is ${favDessert}.`;
}

console.log (food('sandwiches', 'cookies'));

//demonstrate
function first(inputFunction){
    inputFunction();
}

function second(){
    console.log ('functions are amazing, but also hard!');
}

first (second);

/*
Challenge 2:
Let's compose functions!  Your first function should take a function as input and return that 
function
with a function call.  Your second function should take a string as input and return that 
string with 
extra stuff added to that string.  Console.log the results of your function calls.  Additional 
information
is below to help clarify what you're doing (the below is just an example):
first function: input-secondFunc output-secondFunc('coding is great!')
second function: input-'coding is great!' output-'coding is great!  pie is, too!'
*/

function numOne (secondFunc){
    return secondFunc('coding is great! ');
}

function numTwo(str){
 return str + 'pie is, too!';
}

console.log (numOne(numTwo));

//challenge 3:
//make 2 functions. first function takes a function as input and calls that function
//with a number value. the second function takes a number as input and concatenates that 
//number with a string. the second function should return the concatenation. the first 
//function should return the call.

function numFunc(numParam){  //"numParam" refers to "catFun" from line 112
    return numParam(4); 
}

function catFun(num){  //catFun only runs because of numFunc
    return num+='concatenation'; //'numParam(4)' and this line are the same.
}

console.log (numFunc(catFun));
