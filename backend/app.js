const express = require('express');
const mongoose = require('mongoose');

const usersAPIroutes = require('./routes/userAPI.js');
const tipoProductoAPIroutes = require('./routes/tiposProdAPI.js');

let app = express();
const PORT = 8080;

mongoose.connect('mongodb://127.0.0.1:27017/projecteFinal?authSource=admin')
.then(() =>{
    console.log('Conectat a Mongoose');
}).catch((error) =>{
    console.log('ERROR: ' + error);
})

// middleware per a que la app puga analitzar el body d'una sol·licitud
app.use(express.json());
app.use('/api/users', usersAPIroutes);
app.use('/api/tipos', tipoProductoAPIroutes);

app.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + `${PORT}`)
})