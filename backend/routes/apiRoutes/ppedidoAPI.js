const express = require('express');
const pedidoController = require('../../controllers/pedido.js');

let router = express.Router();

router.get('/', pedidoController.getPedidos);

router.post('/', pedidoController.postPedido);