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

    }catch(error){

    }
}

// crear un producto
exports.postProductos = async(req, res) => {
    try{
        const { name, desc, photo, _idTipo } = req.body;

        const newProducto = await Producto.create({
            name,
            desc,
            photo,
            _idTipo
        })
      
        res.json(newProducto)
    }catch(error){
        res.send("ERROR: " + error); 
    }
}