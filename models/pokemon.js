const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required : [true, "Pokemon name is required"],
  },
  image: {
    type: String,
    required: true,
  },  
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);


module.exports = Pokemon;

// { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
// { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
// { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
// { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
// { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
// { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
// { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },