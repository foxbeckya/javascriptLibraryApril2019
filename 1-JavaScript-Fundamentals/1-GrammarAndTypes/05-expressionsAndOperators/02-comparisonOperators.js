/*
COMPARISON OPERATORS
5-expressionsAndOperators
 02-comparisonOperators.js
 */

 // equality comparison operator
 console.log('3' == 3); //true. values are the same, even if types aren't. type coersion.
 console.log(4 == 4); //true
 console.log(3 == '4'); //false. types and values are different

 //strict equality comparison operator ===
 console.log(3 === 3); //true
console.log('3'=== 3); //false. cares about the values AND the types

//not equal comparison operator
console.log('3' != 4); //true. 
console.log('3' !== 3); //false. 3 is equal to 3.

//strict not equal comparison operator
console.log('3' !== 3); //true. not the same. types are different
console.log(3 !== 3); //false. same value and same type. 

//greater than
console.log(3> 2); //true
console.log(2>3); //false

//less than
console.log(2<3); //true
console.log(3<2); //false

//greater than or equal to
console.log(3>=2); //true
console.log(3>=3); //true

//less than or equal to
console.log(2 <= 3); //true
console.log(3 <= 2); //false

//And (both expressions on either side of the operator must be true for "And "to return true)
console.log (1<2 && 3>0); //true. one is less than two. three is greater than zero. entire expression is true.
console.log (2<1 && 3>0); //false. 2 isn't less than one

//Or(either expression on one side of the operator must be true for "or" to return true)
console.log(1<2 || 3<0); //true. one is less than two. true.
console.log(2<1 || 3<0); //false. neither one is true.

let obj ={key: 'test'};
console.log(obj == {key: 'test'}); //false. not comparing actual contents. is it the exact same thing?

console.log(obj == obj); //true. object compared to same object. talking about exact same item

let arr=[1, 2, 3, 4];
console.log(arr ==[1, 2, 3, 4]); //false
console.log(arr == arr); //true

/* 
objects, arrays, functions...doesn't care about contents. cares about sameness of thing.
if things are different, even though contents are the same, then false.
*/