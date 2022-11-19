require("dotenv").config();
const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon.js");
const methodOverride = require("method-override"); // import method override

// Allows you to take data and use data from the URL.
//URLencoded - is the data in the URL
// Need this to use req.params and req.query
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("public"));

app.use(methodOverride("_method")); // swap the method if the url has a ?_method=XXX query

// Landing - GET /
app.get("/", (req, res) => {
  res.render("landing.ejs");
});

// Index - GET /pokemon
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", { data: Pokemon });
});

// New - GET /pokemon/new
app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs", {
    data: Pokemon,
  });
});

// Create - POST /pokemon
app.post("/pokemon", (req, res) => {
  Pokemon.unshift(req.body);
  res.redirect("/pokemon");
  console.log(req.body);
});

// Destroy - DELETE /pokemon/:id
app.delete("/pokemon/:id", (req, res) => {
  // splice the item out of the array
  Pokemon.splice(req.params.id, 1);
  // redirect the user back to index
  res.redirect("/pokemon");
});

// Show - GET /pokemon/:id
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", {
    data: Pokemon[req.params.id],
    index: req.params.id,
  });
});

// Edit - GET /pokemon/:id/edit
app.get("/pokemon/:id/edit", (req, res) => {
  // render edit.ejs with the existing fruits data
  res.render("edit.ejs", {
    data: Pokemon[req.params.id],
    index: req.params.id,
  });
});

// Update - PUT /pokemon/:id
app.put("/pokemon/:id", (req, res) => {
  // updating Pokemon
  Pokemon[req.params.id] = req.body;
  // redirect user back to index
  res.redirect("/pokemon");
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
