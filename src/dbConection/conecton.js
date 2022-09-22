const mongoose = require('mongoose');

const password = 'ramiropro12'
const dbname = 'pokedex'
const uri = `mongodb+srv://Ramiro:${password}@cluster1.2pte8qf.mongodb.net/${dbname}?retryWrites=true&w=majority`



module.exports =()=> mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
