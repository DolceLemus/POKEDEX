const getPokemonById = (idOrName) => {
  const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/";

  $.get(pokemonEndpoint + idOrName, function (data) {
    console.log(data);
    $("#name").text("Name: " + data.name);
    $("#image").attr("src", data.sprites.front_shiny);
    $("#basic-exp").text("Exp.:" + data.base_experience);
    $("#weight").text("Weight:" + data.weight);
  });
};
const getPokemonLocation = (idOrName) => {
  const locationEndPoint = "https://pokeapi.co/api/v2/location/";

  $.get(locationEndPoint + idOrName, function (data) {
    console.log(data);
    $("#region").text("Region: " + data.region.name);
  });
};
const  getPokemonAbility = (idOrName) => {
  const abilityEndpoint = "https://pokeapi.co/api/v2/ability/";

  $.get(abilityEndpoint + idOrName, function (data) {
    console.log(data);
    $("#short-ability").text("Ability: " + data.effect_entries[0].effect);
    $("#ability").text("Ability: " + data.effect_entries[0].short_effect);
    //HABLA jajajaja
    $("btn-search").click(responsiveVoice.speak(data.effect_entries[0].effect));
  });
}
const getPokemon = (ev) => {
  ev.preventDefault();
  const idOrName = $("#keyword").val();
  // Refactoriz[e un poco tu codigo para evitar el codigo espaguetti y que puedas reutilizar estas funciones en futurar implementaciones de la PDX
  getPokemonById(idOrName);
  getPokemonLocation(idOrName);
  getPokemonAbility(idOrName);
  // getUrlPokedex no es una funcion necesaria. 
  // const getURLpokedex = "https://pokeapi.co/api/v2/pokedex/";
  // $.get(getURLpokedex , function (data) {
  //   console.log(data);
  // });
}

$(document).ready(function () {
  $("#site").submit(getPokemon);
})

// sources
// https://www.w3schools.com/jquery/event_preventdefault.asp
// https://api.jquery.com/attr/
// https://api.jquery.com/submit/
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
// https://github.com/PokeAPI/sprites/tree/master/sprites


// <<<<--------------- $.get ------------------>>>>>
// jQuery.get( url [, data ] [, success ] [, dataType ] ) 
// This is a shorthand Ajax function, which is equivalent to:
// $.ajax({
//     url: url,
//     data: data,
//     success: success,
//     dataType: dataType
//   });
// https://api.jquery.com/jquery.get/
