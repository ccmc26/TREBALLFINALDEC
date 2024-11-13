const mongoose = require('mongoose');

let productoSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true
    },
    desc:{
        type: String,
        maxlength: 400
    },
    _idTipo: {
        type: mongoose.Types.ObjectId,
        ref: 'tiposProducto'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
})

productoSchema.virtual('tipoProductoInfo',{
    ref: 'tiposProducto',
    localField: '_idTipo',
    foreignField: '_id',
    justOne: true,
});

const producto = mongoose.model('producto', productoSchema);
module.exports = producto;