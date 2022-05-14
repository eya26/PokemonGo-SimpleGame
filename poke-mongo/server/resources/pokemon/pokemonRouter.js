const express=require("express");
const pokemonRouter = express.Router()
const Pokemon = require("./Pokemon");
pokemonRouter.use(express.json())

const pokemonController =require("./pokemonController")
const bodyParser= require("body-parser");

pokemonRouter.use(bodyParser()) 
pokemonRouter.get("/",pokemonController.pokemon_get_all);

pokemonRouter.get("/:number",pokemonController.pokemon_get_one);
pokemonRouter.get("/:name",pokemonController.pokemon_get_name);

pokemonRouter.post("/", pokemonController.pokemon_post)
   
pokemonRouter.put("/:number", pokemonController.pokemon_put);


pokemonRouter.delete("/:number",pokemonController.pokemon_delete_one);
pokemonRouter.delete("/",pokemonController.pokemon_delete);

module.exports = pokemonRouter;
