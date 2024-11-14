const tipoProducto = require('../models/tipoProducto');

// ensenya tots els tipos de productes
exports.getTiposProduct = async(req, res) => {
    try{
        let tipos = await tipoProducto.find();
        res.json(tipos);
    }catch(error){
        res.send("ERROR: " + error);
    }
}

exports.getTipoProduct = async(req, res) => {
    try{
        const id = req.params._id;

        const tipoP = await tipoProducto.findById(id);
        res.json(tipoP);
    }catch(error){
        res.send("ERROR: " + error);
    }
}

// crea un nou registre en la informacio que li passem
exports.posTiposProduct = async(req, res) => {
    try{
        const { name, desc} = req.body;

        const newTipo = await tipoProducto.create({
            name,
            desc
        });
        await newTipo.save();
    res.json(newTipo);
    }catch(error){
        res.send("ERROR " + error);
    }
}

// actualitza un nou registre
exports.patchTiposProduct = async(req, res) => {
    try{
        const tipoID = req.params._id;
        let existeTipo = await tipoProducto.findOne({_id: tipoID});
        if(existeTipo){
            let updateTipo = await tipoProducto.updateOne({_id: tipoID}, req.body);
            // await tipoProducto.find({_id: tipoID})
            res.json({updateTipo});
        }else{
            res.send("No existeix cap tipus a actualitzar");
        }
    }catch(error){
        res.send("ERROR: " + error)
    }
}

exports.deleteTiposProduct = async(req, res) => {
    try{
        let tipodeleted = await tipoProducto.findByIdAndDelete({_id: req.params._id});
        res.send(tipodeleted);
    }catch(error){
        res.send("ERROR: " + error);
    }
}