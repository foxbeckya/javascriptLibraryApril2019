var char='https://swapi.co/api/people/';

async function starWars(char) {
  fetch (char)
    char.preventDefault(); 
        then(result => result.json())
        then(json => {
            console.log(char);
        })
}

console.log (starWars (4));