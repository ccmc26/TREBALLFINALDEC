// PER ACABAR, MIRAR COM REALITZAR-HO
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let pedidoSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    user: [{

    }],
    
},
);

pedidoSchema.plugin(AutoIncrement, { inc_field: '_id' });

let pedido = mongoose.model('pedido', pedido);
module.exports = pedido;