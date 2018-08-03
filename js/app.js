// const descriptionContainer = document.getElementById('description-container');
// const btnSearch = document.getElementById('btn-search');

// let data = null;

// const pokemonRequest = new XMLHttpRequest();

// pokemonRequest.addEventListener("readystatechange", function () {
//     if (pokemonRequest.readyState === pokemonRequest.DONE) {
//         data = JSON.parse(pokemonRequest.responseText);
//         console.log (data);
//     } else(
//         console.log("cargando")
//     )
// });

// const getImage = function () {
//     data.sprites.keyword;
// }


// pokemonRequest.open("GET",`https://pokeapi.co/api/v2/pokemon/${keyword}`);
// pokemonRequest.send();


// let connectionObject = {
//     "url": "https://pokeapi.co/api/v2/pokemon-species/1/",
//     "async": true,
//     "crossDomain":true,
//     "method": "GET",
//     "headers":{}
// }

// $.ajax(connectionObject).done(function(response){
//     console.log(JSON.parse(response));
// })



const getPokemon = function (ev) {
  ev.preventDefault();
  const number = $("#keyword").val();
  const getURL = "https://pokeapi.co/api/v2/pokemon/";
  $.get(getURL + number,  function(pokemon) {
      console.log(pokemon);
    $("#name").text(pokemon.name);
    $("#image").attr("src",pokemon.sprites.front_default);
  });
}

$("#site").submit(getPokemon); 


// sources
// https://www.w3schools.com/jquery/event_preventdefault.asp
// https://api.jquery.com/attr/
// https://api.jquery.com/submit/
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
// https://github.com/PokeAPI/sprites/tree/master/sprites