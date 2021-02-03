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
    const series = new Serie(req.body);
    await series.save()
        .catch(err => {
            console.error(err);
        });
    res.json({'estado': 'Serie insertada correctamente'});
};
serieController.getSerie = async (req, res) => {
    const movie = await Serie.findById(req.params.id)
    try {

        if (movie == null) {
            return res.status(404).json({message: 'Movie not found'})
        }
        res.json(movie);
    }catch (err){
        return res.status(500).json({message: err.message})
    }
    res.status(201).json(movie);
};
serieController.updateSerie = async (req,res) => {
    try{
        const serie = {
            id:req.params.id,
            imagen:req.params.imagen ,
            titulo: req.params.titulo,
            capitulos:req.params.capitulos,
            categorias:req.params.categorias,
            emision:req.params.emision,
            sinopsis:req.params.sinopsis
        };

        const updatedMovie = await Serie.findByIdAndUpdate(serie.id, {$set: serie}, {new: true,
            useFindAndModify: false});
        res.status(201).json({message: 'serie actualizada'});
    }catch (err){
        res.status(400).json({message: err.message})
    }
};
serieController.deleteSerie = async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id);
    res.json({status: 'Serie borrada'})
};
module.exports = serieController;
