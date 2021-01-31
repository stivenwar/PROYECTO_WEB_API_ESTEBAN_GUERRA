const mongoose = require('mongoose');
const { Schema } = mongoose;

const serieSchema = ({

    imagen: {type: String,required:true},
    titulo: {type: String,required:true},
    capitulos:{type: String,required:true},
    categorias:{type: String,required:true},
    emision:{type: String,required:true},
    sinopsis: {type: String,required:true}


});

module.exports = mongoose.model('Serie',serieSchema,'series');
/*
imagen: String,
    titulo: String,
    capitulos: String,
    categorias: String,
    emision: String,
    sinopsis: String

 imagen: {type: String},
 titulo: {type: String},
 capitulos:{type: String},
 categorias:{type: String},
 emision:{type: String},
 sinopsis: {type: String}

  */
