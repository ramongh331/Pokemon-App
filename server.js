require("dotenv").config();
const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon.js");

// Allows you to take data and use data from the URL.
//URLencoded - is the data in the URL
// Need this to use req.params and req.query
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("public"));

// Landing - GET /
app.get("/", (req, res) => {
  res.render("landing.ejs");
});

// Index - GET /pokemon
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", { data: Pokemon });
});

// New - GET /pokemon/new

// Create - POST /pokemon

// Destroy - DELETE /pokemon/:id

// Show - GET /pokemon/:id
app.get("/pokemon/:id", (req, res) => {
  res.render("show.ejs", { data: Pokemon[req.params.id] });
});

// Edit - GET /pokemon/:id/edit

// Update - PUT /pokemon/:id

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
