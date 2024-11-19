const express = require('express');
const pedidoController = require('../../controllers/pedido.js');

let router = express.Router();

router.get('/', pedidoController.getPedidos);

router.post('/', pedidoController.postPedido);

router.patch('/:_id', pedidoController.updatePedido);

router.delete('/:id', pedidoController.deletePedido);