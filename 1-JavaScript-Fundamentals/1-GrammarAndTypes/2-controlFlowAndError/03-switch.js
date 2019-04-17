/*
SWITCH STATEMENTS
*/

let friend;

switch(friend) {
    case 'Tom':
    console.log('hey, tom when will you bring bread for me?');
    break;
    case 'Kenn':
    console.log('hey, kenn, do you own a wolf?');
    break;
    case 'Alecx':
    console.log('hey, alecx, how many magic cards do you own?');
    break:
    default:
    console.log(`im sorry, ${friend}, but do i know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or boolean');
    break;
    default;
    console.log('yep is not a string or a number');
}

