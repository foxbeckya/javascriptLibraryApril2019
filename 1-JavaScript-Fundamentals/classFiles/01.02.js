//arrays
let newArr= ['Brie', 17, true, {ketchup: true, pickles: false, meat: true}];
//arrays have numbred elements. the numbers are index-es and the values
//are the elements
console.log(newArr[3]);
newArr[3] = 'Zach is one bad dude with styling';
console.log(newArr[3]);

newArr[3].pickles = true;
console.log(newArr[3]);

//conditionals
let isRainy = true;
let isWarm = true;
if(isRainy == true){
    console.log('bring your umbrella');
}else {
    console.log('leave umbrella at home');
}

if(isWarm){
    console.log('wear shorts');
}else {
    console.log('wear a parka');
}

let gpas = [1.9, 3.5, '4.0', 2.8];
let singleGPA = gpas[2];

if (singleGPA == 4.0){
    console.log('wow! that is amazing!');
}else if (singleGPA >= 3.0){
    console.log('that is a strong gpa');
}else {
    console.log('...eh, you might want to hit the books');
}

/*
Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif 
statements to
change one value of the array based upon the index number passed to the conditional.  Use the 
=, +=, /=, 
%=, and **= operators to make the change of the array value (only use one operator per 
    conditional 
statement).
*/

let oreo = [1, 2, 3, 4, 5];
let indexNum = 2;

if (indexNum == 0) {
   oreo [0] **= 5;
} if (indexNum == 1)
 { oreo[1] **=5;}
 if (indexNum == 02)
 { oreo[2] **=5;}
 if (indexNum == 3)
 { oreo[3] **=5;}
 if (indexNum == 4)
 { oreo[4] **=5;}
 if (indexNum == 5)  //don't need "else" because all "if"'s are different 
 { oreo[5] **=5;}


     console.log(oreo);

    /*
    Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, 
characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 
2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 
2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.

*/

// let favMov = {
//     nameOfMovie:'Roman Holiday', 
//     runTime: 120, 
//     characters: {
//         character1 = {
//             name: 'princess', 
//             age: 23, 
           
//         character2 ={
//             name: 'reporter', 
//             age: 30, 
            
//     genre: 'romantic comedy'};
//}

//console.log(favMov.nameOfMovie);

let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 'long',
    characters: {
        charOne: {
            name: 'Legolas',
            age: 2931,
        },
        charTwo: {
            name: 'Gandalf',
            age: 2019,
        }
    },
    genre: 'Action & Adventure'
}

console.log(lotrObj.characters.charOne.age);
console.log(lotrObj.characters);

/*
Challenge 3:
Try to predict the behavior of each variable separately (first, second, and third).
//1st example: */
console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;

/* prediction: all three are undefined
actual: the 'first' variable is hoisted, prints undefined. all will get hoisted, but 'let and
'const' variables break b/c they have no value.

//2nd example: */
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
}
//prediction: 5
//actual: undefined. function is hoisted and variable is hoisted. 
    //what it looks like:
    /*
    function hoistTest(){
        console.log (first);
    }
    var first;
    hoistTest(); 
    first=5; 
    */

//3rd example: 
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();

/*prediction: six things. 
1st 1st undefined
1st 2nd break
1st 3rd break
2nd 1st break
2nd 2nd break
2nd 3rd break

actual: it all breaks.
    if you take out "second and third" in the function{console.log}, 'var first' ignores the second 
    set of brackets, and will hoist. 
*/
