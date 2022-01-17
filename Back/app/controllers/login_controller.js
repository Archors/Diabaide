const {getLogin} = require('../models/login_model');
const db = require("../../DB.js")
const {
    listAllUsers
  } = require("../models/user");

exports.login = async (req, res) => {
    const body = req.body;    
    if(!body.email || !body.password) {
        
        return res.status(400).json({message: 'Email et password sont obligatoires.'});
    }
    else {
        try{
            const client = await (await db.connect()).db().collection('Users')
            const users = await listAllUsers(client);   
            const token = await getLogin(body,users);
            return res.status(201).json({user : token.user, accessToken : token.accessToken});

    } catch(err) {

        return res.status(500).json({message: err});
    }
    
    }
};

