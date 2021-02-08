'use strinct'
const Serie = require('../models/serie');
const serieController = {};

serieController.getSeries = async (req, res) => {
    try{
        const series = await Serie.find()
        res.json(series)
    }catch (err){
        res.status(400).json({message: err.message});
    }


};

serieController.createSerie = async (req, res) => {
    try{
        const series = new Serie(req.body);
        console.log(series);
        const newSerie = await series.save()
        res.json({'estado': 'Serie insertada correctamente'});
    }catch (err){
        res.status(400).json({message: err.message});
    }


};
serieController.getSerie = async (req, res) => {

    try {
        const serie = await Serie.findById(req.params.id)
            res.json(serie);
        if (serie === null) {
             res.status(404).json({message: 'serie no encontrada'})
        }

    }catch (err){
         res.status(500).json({message: err.message})
    }

};
serieController.updateSerie = async (req,res) => {
    try{
        const serie = {
            imagen:req.body.imagen ,
            titulo: req.body.titulo,
            capitulos:req.body.capitulos,
            categorias:req.body.categorias,
            emision:req.body.emision,
            sinopsis:req.body.sinopsis
        };
       const ser= await Serie.findOneAndUpdate(req.params._id, {$set: serie}, {new: true,
            useFindAndModify: false});
       console.log(ser)
       res.status(201).json({message: 'serie actualizada', serie: serie});
    }catch (err){
        res.status(400).json({message: err.message})
    }


};
serieController.deleteSerie = async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id);
    res.json({status: 'Serie borrada'})
};
module.exports = serieController;
