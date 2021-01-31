const mongoose = require('mongoose');
const { Schema } = mongoose;

const serieSchema = ({
    imagen: {type: String},
    titulo: {type: String},
    capitulos:{type: String},
    categorias:{type: String},
    emision:{type: String},
    sinopsis: {type: String}

});

module.exports = mongoose.model('Serie',serieSchema,'series');

