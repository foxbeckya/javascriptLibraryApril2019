// fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json))

// async function slowResult(){  ///we're going to call this function, but it won't happen immediately. run all before finish.
//     await fetch ('http://taco-randomizer.herokuapp.com/random/?full-taco=true') //await makes this go first.
//     .then (res => res.json())
//     .then (json => console.log(json))
//     console.log('this is a message!') //if later code depends on an earlier result, use await and async
// }

// slowResult();

async function slowResult(){  
    await fetch ('http://taco-randomizer.herokuapp.com/random/?full-taco=true')  //talk to server
    .then (res => res.json())  //gives us result, make it readable
    .then (test => {test.lolProperty='this is a random property!'; return test;})  
    .then(json => console.log(json))
    console.log('this is a message!') 
}

slowResult();