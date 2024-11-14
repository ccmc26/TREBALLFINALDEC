const express = require('express');
const productoController = require('../../controllers/productoAPI.js');

let router = express.Router();

router.get('/', productoController.getProductos);
router.get('/:_id', productoController.getProductoById);
router.get('/tipo/:_idTipo', productoController.getProductosByTipo);


router.post('/', productoController.postProductos);

router.patch('/:_id', productoController.updateProductos);

router.delete('/:_id', productoController.deleteProductos);


module.exports = router;