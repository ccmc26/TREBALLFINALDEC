const tipoProducto = require('../models/tipoProducto');

exports.getTiposProduct = async(req, res) => {
    try{
        let tipos = await tipoProducto.find();
        res.json(tipos);
    }catch(error){
        res.send("ERROR: " + error);
    }
}

exports.posTiposProduct = async(req, res) => {
    try{
        const { name, desc} = req.body;

        const newTipo = await tipoProducto.create({
            name,
            desc
        });

    res.json(newTipo);
    }catch(error){
        res.send("ERROR " + error);
    }
}