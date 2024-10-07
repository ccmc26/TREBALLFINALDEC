const express = require('express');
const productoController = require('../controllers/productoAPI.js');

let router = express.Router();

router.get('/', productoController.getProductos);

router.post('/', productoController.postProductos);

// router.patch('/:_id', );

// router.delete('/:_id', );


module.exports = router;