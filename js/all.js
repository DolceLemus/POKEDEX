$(document).ready(function () {

     const url = 'https://pokeapi.co/api/v2/pokedex/1';
     const template = function (name, picture,id) {
        var t = "<div id='pokemon'><img src='" + picture + "'/><p>'" + name + "'</p><p> ID: '" + id + "'</p></div>"
        return t;
      }

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data.pokemon_entries);
            let ul = document.getElementById('list');
            let pokemones = data.pokemon_entries;
            pokemones.forEach(element => {
                let picture = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + element.entry_number + '.png'; 
                let name = element.pokemon_species.name;
                let id = element.entry_number;
                $('#list').append(template(name,picture,id));
            });
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });  
        
    

})


// source
// fetch(url) // Call the fetch function passing the url of the API as a parameter
// .then(function() {
//     // Your code for handling the data you get from the API
// })
// .catch(function() {
//     // This is where you run code if the server returns any errors
// });


// const number = (min, max) => {
    //     return Math.floor(Math.random() * (max - min)) + min;
    //   }

    //   console.log(number(1,900));