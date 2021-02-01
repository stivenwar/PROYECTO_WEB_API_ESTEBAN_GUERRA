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
    const serie = await Serie.find(req.params.id)
        .catch((err) => {
            console.error(err);
        });
    res.json(serie);
};
serieController.updateSerie = async (req,res) => {
    const serie = {};
    await Serie.findByIdAndUpdate(req. params.id, {$set: serie}, {new: true});
    res.json({status: 'Serie actualizada' });
};
serieController.deleteSerie = async (req, res) => {
    await Serie.findByIdAndDelete(req.params.id);
    res.json({status: 'Serie borrada'})
};
module.exports = serieController;
