require("dotenv").config();
const express = require("express");
const jsxEngine = require("jsx-view-engine");
const pokemon = require("./models/pokemon");

const app = express();
const PORT = process.env.PORT;

const methodOverride = require("method-override");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Pokemon = require("./models/pokemon.js");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

// seed route
app.get("/pokemon/seed", async (req, res) => {
  try {
    await Pokemon.create([
      {
        name: "bulbasaur",
        img: "http://img.pokemondb.net/artwork/bulbasaur",
      },
      {
        name: "charmander",
        img: "http://img.pokemondb.net/artwork/charmander",
      },
      {
        name: "squirtle",
        img: "http://img.pokemondb.net/artwork/squirtle",
      },
    ]);
    res.redirect("/pokemon");
  } catch (error) {
    console.error(error);
  }
});

app.get("/index", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//new
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//delete
app.delete("/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndRemove(req.params.id);
    res.redirect("/pokemon"); //redirect back to fruits index
  } catch (error) {
    console.error(error);
  }
});

//update
app.put("/pokemon/:id", async (req, res) => {
  // fruits.push(req.body);
  await Fruit.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/fruits");
});

//create
app.post("/pokemon", async (req, res) => {
  pokemon.push(
    (req.body.img =
      "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase())
  );
  // console.log(pokemon);
  // res.send('data received');

  await Pokemon.create(req.body);
  res.redirect("/pokemon");
});

//edit
app.get("/pokemon/:id/edit", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.FindById(req.params.id);
    res.render("pokemon/Edit", { pokemon: foundPokemon });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.render("Index");
});

app.get("/pokemon", async (req, res) => {
  try {
    const pokemen = await Pokemon.find();
    res.render("Index", { pokemon: pokemon });
  } catch (error) {
    console.error(error);
  }
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.id],
  });
});

app.listen(PORT, () => {
  console.log("listening on", PORT);
});
