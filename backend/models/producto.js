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
    photo:{
        type: String,
        unique: true
    },
    _idTipo: [{
        _id:{
            type:mongoose.Schema.ObjectId,
            ref: 'tiposProducto'
        }
    }]
})

let producto = mongoose.model('producto', productoSchema);
module.exports = productoSchema;