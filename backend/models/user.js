const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 2,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
        // al principio de la cadena puede añadir tanto numeros como digitos
        // seguido de un @ con una string que solo puede contener letras
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    surnames: {
        type: [String],
        // trim: true
    }
    ,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

let User = mongoose.model('users', userSchema);
module.exports = User;