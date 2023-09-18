const express = require("express");
const jsxEngine = require("jsx-view-engine");
const pokemon = require("./models/pokemon");

const app = express();
const port = 3000;


app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.get("/index", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/", (req, res) => {
  res.render("Index");
});

app.listen(port, () => {
  console.log("listening");
});
