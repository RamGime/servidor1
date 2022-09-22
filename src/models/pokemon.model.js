//modelo de datos de pokemon

const moongoose = require('mongoose');
const {Schema} = moongoose;

const PokeSchema = new Schema({
    name: String,
});

const Pokemodel = moongoose.model('pokemons', PokeSchema);

module.exports = Pokemodel;
