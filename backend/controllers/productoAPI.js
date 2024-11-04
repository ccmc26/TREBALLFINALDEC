const Producto = require('../models/producto.js');

// listar todos los productos
exports.getProductos = async(req, res) => {
    try{
        let productos = await Producto.find();
        res.json(productos);
    }catch(error){
        res.send("ERROR: " + error);
    }
}

// listar por idTipo
exports.getProductosByTipo = async(req, res) => {
    try{
        const _idTipo = req.params._idTipo;
        let productos = await Producto.find({_idTipo: _idTipo});
        res.json(productos);
    }catch(error){
        res.send("ERROR " + error);
    }
}

// crear un producto
exports.postProductos = async(req, res) => {
    try{
        const { name, desc, photo, _idTipo, price } = req.body;

        const newProducto = await Producto.create({
            name,
            desc,
            photo,
            _idTipo,
            price
        })
      
        res.json(newProducto)
    }catch(error){
        res.send("ERROR: " + error); 
    }
}

// actualitzar un producto
exports.updateProductos = async(req, res) => {
    try{
        const updateProducto = await Producto.findByIdAndUpdate({_id: req.params._id }, req.body);
        res.json(updateProducto);
    }catch(error){
        res.send("ERROR: " + error);
    }
}

// eliminar un producto
exports.deleteProductos = async(req, res) => {
    try{
        const deleteProducto = await Producto.findByIdAndDelete({_id: req.params._id});
        res.json(deleteProducto);
    }catch(error){
        res.send("ERROR " + error);
    }
}