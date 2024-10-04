const User = require('../models/user');

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

exports.getUserBySurname = async (req, res) => {
    try{
        const user = await User.find({username: `${req.params.username}`})
        if(user.length !== 0){
            res.json(user);
        }else{
            res.send('No hi ha cap registre');
        }
    }catch(error){
        res.send("ERROR: "+ error);
    }
}