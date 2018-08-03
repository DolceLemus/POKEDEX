
const getPokemon = function (ev) {
  ev.preventDefault();
  const number = $("#keyword").val();
  const getURL = "https://pokeapi.co/api/v2/pokemon/";
  const getURLDesc = "https://pokeapi.co/api/v1/description/";

  $.get(getURL + number,  function(pokemon) {
      console.log(pokemon);
    $("#name").text("Name: " + pokemon.name);
    $("#image").attr("src",pokemon.sprites.front_default);
  });

  $.get(getURLDesc + number,  function(pokemon) {
  $("#description").text("Description: " + pokemon.description);
    //HABLA jajajaja
  $("btn-search").click(responsiveVoice.speak(pokemon.description));
});
}

$("#site").submit(getPokemon); 


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
