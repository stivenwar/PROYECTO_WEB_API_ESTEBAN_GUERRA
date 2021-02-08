const mongoose = require('mongoose');
const { Schema } = mongoose;

const serieSchema =({
    id:{type:String},
    imagen: [{type: String,required:true}],
    titulo: {type: String,required:true},
    capitulos:{type: String,required:true},
    categorias:[{type: String,required:true}],
    emision:{type: String,required:true},
    sinopsis: {type: String,required:true}

});

module.exports = mongoose.model('Serie',serieSchema,'series');

