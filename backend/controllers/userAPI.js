const User = require('../models/user');

exports.getUsers = async (req, res) =>{
    try{
        const users = await User.find();
        if(users.length !== 0){
            res.json(users);
        }else{
            res.message('No hi ha cap registre');
        }
    }catch(error){
        res.send("ERROR: " + error);
    }
}   