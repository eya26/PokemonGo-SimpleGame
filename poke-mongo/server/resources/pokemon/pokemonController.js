const { json } = require("body-parser");
const { render } = require("express/lib/response");
const Pokemon = require("./Pokemon");





exports.pokemon_get_all = (req,res) => {
    Pokemon.find({})
    .then((pokemons) => {
        res.status(200).json(pokemons)
    })
}
   

exports.pokemon_get_one = (req,res) => {
    Pokemon.findOne({ 'number':req.params.number })
    .then((pokemons) => {
        res.status(200).json(pokemons)
    })
  };


exports.pokemon_get_name = (req,res) => {
    Pokemon.findOne({ 'name':req.params.name})
    .then((pokemons) => {
        res.status(200).json(pokemons)
    })
  };

exports.pokemon_post =  (req,res) => {
    console.log("the new pokemon is :",req.body);
    const newPokemon = new Pokemon(req.body);
    newPokemon.save().then((pokemon) =>{
        res.status(201).send(pokemon)
    })
    .catch((error)=> {
        res.status(500).send(error);
    })
};

exports.pokemon_put = (req,res) => {

    Pokemon.findOneAndUpdate({ number:req.params.number},
        { name:req.body.name,
        types:req.body.types,
        imageUrl:req.body.imageUrl
    })
    .then(() => {
        console.log("Saved!")
        res.status(201).json(Pokemon);
})
    .catch((error) => {
        console.log("error");
        res.send(error)
})
}

exports.pokemon_delete_one = (req,res) => {
    Pokemon.where().findOneAndRemove({number:req.params.number},function (err, pokemon) {
        if (err) return handleError(err);
        console.log( pokemon);
      });
    
    res.send()
};

exports.pokemon_delete = (req,res) => {
    Pokemon.deleteMany({},function (err, pokemon) {
        if (err) return handleError(err);
        
      });
    
    res.send()
};

