const {getLogin} = require('../models/login_model');
const db = require("../../DB.js")
const {
    listAllUsers
  } = require("../models/user");


//ALlows the user to login
exports.login = async (req, res) => {
    const body = req.body;    
    if(!body.email || !body.password) {
        
        return res.status(400).json({message: 'Email et password sont obligatoires.'});
    }
    else {
        try{
            const client = await (await db.connect()).db().collection('Users')
            const users = await listAllUsers(client);   // List all the user and return their array
            const token = await getLogin(body,users); // Find the user who match
            return res.status(201).json({ accessToken : token.accessToken});

    } catch(err) {

        return res.status(500).json({message: err});
    }
    
    }
};

