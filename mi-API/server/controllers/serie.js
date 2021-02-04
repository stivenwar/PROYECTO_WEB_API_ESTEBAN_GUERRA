'use strinct'
const Serie = require('../models/serie');
const serieController = {};

serieController.getSeries = async (req, res) => {
    const series = await Serie.find()
        .catch((err) => {
            console.error(err);
        });
    res.json(series);
};

serieController.createSerie = async (req, res) => {
    try{
        console.log(req);
        const series = new Serie(req.body);
        console.log(series);
        const newSerie = await series.save()
        res.json({'estado': 'Serie insertada correctamente'});
    }catch (err){
        res.status(400).json({message: err.message});
    }


};
serieController.getSerie = async (req, res) => {
    const serie = await Serie.findById(req.params.id)
    try {

        if (serie == null) {
            return res.status(404).json({message: 'Serie no encontrada'})
        }
        res.status(201).json(serie);
    }catch (err){
        return res.status(500).json({message: err.message})
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
       const ser= await Serie.findOneAndUpdate(req.params.id, {$set: serie}, {new: true,
            useFindAndModify: false});
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
