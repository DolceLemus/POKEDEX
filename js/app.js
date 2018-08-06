


  const getPokemon = function (ev) {
    ev.preventDefault();
    const number = $("#keyword").val();
    const getURL = "https://pokeapi.co/api/v2/pokemon/";
    const getURLLocat = "https://pokeapi.co/api/v2/location/";
    const getURLAbil = "https://pokeapi.co/api/v2/ability/";



    $.get(getURL + number, function (data) {
      console.log(data);
      $("#name").text("Name: " + data.name);
      $("#image").attr("src", data.sprites.front_shiny);
      $("#basic-exp").text("Exp.:" + data.base_experience);
      $("#weight").text("Weight:" + data.weight);
    });



    $.get(getURLLocat + number, function (data) {
      console.log(data);
      $("#region").text("Region: " + data.region.name);
    });

    $.get(getURLAbil + number, function (data) {
      console.log(data);
      $("#short-ability").text("Ability: " + data.effect_entries[0].effect);
      $("#ability").text("Ability: " + data.effect_entries[0].short_effect);
      //HABLA jajajaja
      $("btn-search").click(responsiveVoice.speak(data.effect_entries[0].effect));
    });


    const getURLpokedex = "https://pokeapi.co/api/v2/pokedex/";
    $.get(getURLpokedex , function (data) {
      console.log(data);
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
