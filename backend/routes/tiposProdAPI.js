const express = require('express');
const tipoProductoController = require('../controllers/tipoProductoAPI.js');

let router = express.Router();

router.get('/', tipoProductoController.getTiposProduct);

router.post('/', tipoProductoController.posTiposProduct);

router.patch('/:_id', tipoProductoController.patchTiposProduct);

router.delete('/:_id', tipoProductoController.deleteTiposProduct);


module.exports = router;