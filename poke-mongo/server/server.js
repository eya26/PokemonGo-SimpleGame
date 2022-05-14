/*var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var pokemonRouter=require('./resources/pokemon/pokemonRouter')
var app=express();


app.get('/:number',pokemonRouter);

app.get('/', function (req, res) {
	res.send("hello server")
});
app.post('/:number',function(req,res){
	console.log('reqqqqq',req.body)

})
app.put('/',function(req,res){
	console.log('reqqqqq',req.body)

})
app.delete('/',function(req,res){
	console.log('reqqqqq',req.body)

})
/*app.get('/', function (req, res) {
	res.send("hello server")
});
app.post('/',function(req,res){
	console.log('reqqqqq',req.body)
})
/*app.get('/', function (req, res) {
	res.send("hello server")
});

/*app.get('/', function (req, res) {
	res.send("hello server")
});
app.post('/',function(req,res){
	console.log('reqqqqq',req.body)
})
/*app.get('/:number',pokemonRouter);
app.get('/',pokemonRouter);
app.post('/',pokemonRouter);
app.put('/:number',pokemonRouter);
app.delete('/:number',pokemonRouter);
app.delete('/',pokemonRouter);
module.exports = app;*/