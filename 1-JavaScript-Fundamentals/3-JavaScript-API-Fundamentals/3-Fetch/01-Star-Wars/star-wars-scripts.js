var starWarsPeopleList = document.querySelector('ul');
fetch('https://swapi.co/api/people')
.then(function(response){
    return response.json();
})
.then(function(json){
    let people=json.results;

    for(p of people){
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }
});

// var starWarsSpeciesList = document.querySelector('#species');
// fetch('https://swapi.co/api/species')
// .then(function(res){
//     return res.json();
// })
// .then(function(json){
//     let species=json.results;

//     for(j of species){
//         let listSpec = document.createElement('li');
//             listSpec.innerHTML = ('<p>' + j.species + '</p>');
//         starWarsSpeciesList.appendChild('species');
//     }});
