const Producto = require('../models/producto.js');

// listar todos los productos
exports.getProductos = async(req, res) => {
    try{
        let productos = await Producto
                                .find()
                                .populate('tipoProductoInfo');
        res.json(productos);
    }catch(error){
        res.send("ERROR: " + error);
    }
}

// listar por idTipo
exports.getProductosByTipo = async(req, res) => {
    try{
        const _idTipo = req.params._idTipo;
        let productos = await Producto
                                .find({_idTipo: _idTipo})
                                .populate('tipoProductoInfo');
        res.json(productos);
    }catch(error){
        res.send("ERROR " + error);
    }
}

// obtindre un producte pel seu id
exports.getProductoById = async (req, res) => {
    try {
        const id  = req.params._id;
        console.log("ID:" + id);
      // Busca el producte per ID
        let producto = await Producto
                                .findById(id)
                                .populate('tipoProductoInfo');
        res.json(producto);
    } catch (error) {
        res.send("ERROR " + error);
    }
};

// crear un producto
exports.postProductos = async(req, res) => {
    try{
        const { name, desc, _idTipo, price } = req.body;

        const newProducto = await Producto.create({
            name,
            desc,
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