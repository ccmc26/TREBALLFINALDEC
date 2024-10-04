const User = require('../models/user');
// EL  CRUD

//tots els users
exports.getUsers = async (req, res) =>{
    try{
        const users = await User.find();
        if(users.length !== 0){
            res.json(users);
        }else{
            res.send('No hi ha cap registre');
        }
    }catch(error){
        res.send("ERROR: " + error);
    }
}   

// pilla l'user pel surname
exports.getUserBySurname = async (req, res) => {
    try{
        const user = await User.find({username: `${req.params.username}`})
        if(user.length === 1){
            res.json(user);
        }else{
            res.send('No hi ha cap registre');
        }
    }catch(error){
        res.send("ERROR: "+ error);
    }
}

// pilla l'user per l'email
exports.getUsersByEmail = async (req, res) => {
    try{
        const user = await User.find({email: `${req.params.email}`})
        if(user.length === 1){
            res.json(user);
        }else{
            res.send('No hi ha cap registre');
        }
    }catch(error){
        res.send("ERROR: "+ error);
    }
}

// crea un user
exports.postUser = async(req, res) => {
    try{
        const { username, email, password, name, surnames} = req.body;

        const newUser = {
            username,
            email,
            password,
            name,
            surnames,
        }

    res.json(newUser);
    }catch(error){
        res.send("ERROR " + error);
    }
}

// actualitza de forma parcial un user
exports.updateUser = async(req, res) => {
    try{
        const usernameUser = req.params.username;
        let existeUser = await User.findOne({username: usernameUser});
        if(existeUser){
            let updatedUser = await User.updateOne({username: usernameUser}, req.body);
            res.json(await User.find({username: usernameUser}));
        }else{
            res.send("No existeix cap usuari a actualitzar");
        }
    }catch(error){
        res.send("ERROR " + error);
    }
}

// elimina un User
exports.deleteUser = async(req, res) => {
    try{
        const userDeleted = await User.findOneAndDelete({username: req.params.username})
        res.json(userDeleted);
    }catch(error){
        res.send("ERROR: " + error);
    }
}