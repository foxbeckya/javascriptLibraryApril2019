/*
FOR OF LOOPS

of requires that your 'thing' that you're looping through be iterable.
it needs to be numbered
*/

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat of catArray){
    console.log(cat, 'says meow');
}
//for of gives us the value back.