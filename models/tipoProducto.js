const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let tipoProductoSchema = new mongoose.Schema({
    _id:{
        type: Number
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        maxlength: 400,
        // sparse: true
        // permitix que el camp siga null o no existisca
    }
},
{ _id: false}
);

tipoProductoSchema.plugin(AutoIncrement, { inc_field: '_id' });

let tipoProducto = mongoose.model('tiposProducto', tipoProductoSchema);
module.exports = tipoProducto;