const express = require("express");
const jsxEngine = require("jsx-view-engine");
const pokemon = require("./models/pokemon");

const app = express();
const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.get("/index", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//delete
//update
//create

app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  console.log(pokemon);
  // res.send('data received');
  res.redirect("/pokemon");
});

app.get("/", (req, res) => {
  res.render("Index");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.id],
  });
});

app.listen(port, () => {
  console.log("listening");
});
