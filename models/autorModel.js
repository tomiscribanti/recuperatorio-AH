const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const autorSchema = new Schema ({
    name: String,
    email: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    } 
})

const Autor = mongoose.model( 'Autor', autorSchema );

module.exports = Autor;