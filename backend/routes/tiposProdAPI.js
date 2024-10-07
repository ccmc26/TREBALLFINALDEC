const express = require('express');
const tipoProductoController = require('../controllers/tipoProductoAPI.js');

let router = express.Router();

router.get('/', tipoProductoController.getTiposProduct);

router.post('/', tipoProductoController.posTiposProduct);


module.exports = router;