const express = require('express');
const mongoose = require('mongoose');

const User = require(__dirname + '/models/user')

let app = express();
const PORT = 8080;

mongoose.connect('mongodb://127.0.0.1:27017/projecteFinal?authSource=admin')
.then(() =>{
    console.log('Conectat a Mongoose');
}).catch((error) =>{
    console.log('ERROR: ' + error);
})

// let userDef = new User({
//     username: 'admin',
//     email: 'admin@admin.com',
//     password: 'admin',
//     name: 'admin1'
// });
// SI QUE FUNCIONA LA CONEXIÓ
// userDef.save().then(resultat => {
//     console.log("Contacte afegit:", resultat);
// }).catch(error => {
//     console.log("ERROR afegint contacte:", error);
// });

app.listen(PORT, () => {
    console.log('Server listening on http://localhost:' + `${PORT}`)
})