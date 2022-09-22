const controller = {};
const conection = require('../dbConection/conecton');
const Pokemodel = require('../models/pokemon.model');
const Pokemon = require('../models/pokemon.model');

controller.index = async (req, res) => { 
    try{
       const title = 'Index desde el servidor, GOOOOOD 🐱‍💻❤😎' ;
       await conection() 
      const allPokemons = await Pokemodel.find()
      console.log(allPokemons) 
      res.render('index',{title});

    }catch(error){
        console.log(error);
    }
}
 

module.exports = controller;

