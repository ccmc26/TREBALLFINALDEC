const Pedido = require('../models/pedido');

// llistar els pedidos
exports.getPedidos = async(req, res) => {
    try{
        const pedidos = await Pedido.find();
        res.json(pedidos);
    }catch(error){
        res.send("ERROR" + error);
    }
}

// afegir pedidos despres d'una facil comprobacio de que tots els camps
// estan plenats
exports.postPedido = async(req, res) => {
    try{
        const {userId, items} = req.body; 
        if (!userId || !items) { 
            res.status(400).send('Falten campss requerits'); 
            return; 
        }

        const newPedido = await Pedido.create({
            userId,
            items
        })

        res.json(newPedido);
    }catch(error){
        res.send("ERROR: " + error);
    }
}

// actualitzar pedido


