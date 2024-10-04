const express = require('express');
const mongoose = require('mongoose');

const usersAPIroutes = require('./routes/userAPI.js');

let app = express();
const PORT = 8080;

mongoose.connect('mongodb://127.0.0.1:27017/projecteFinal?authSource=admin')
.then(() =>{
    console.log('Conectat a Mongoose');
}).catch((error) =>{
    console.log('ERROR: ' + error);
})

app.use('/api/users', usersAPIroutes);

app.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + `${PORT}`)
})