const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const libroSchema = new Schema({
    title: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    },
    autorId: {
        type: Schema.Types.ObjectId,
        ref: 'Autor'
    }
})

const Libro = mongoose.model( 'Libro', libroSchema );
module.exports = Libro;