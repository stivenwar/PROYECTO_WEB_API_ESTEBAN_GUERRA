const express = require('express');
const router = express.Router();
const serieController = require("../controllers/serie");




router.get('/', serieController.getSeries);
router.post('/', serieController.createSerie);
router.get('/:id', serieController.getSerie);
router.put('/:id', serieController.updateSerie);
router.delete('/:id', serieController.deleteSerie);

module.exports = router;
