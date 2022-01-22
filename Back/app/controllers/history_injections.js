const {
    listHistory,
    showHistoryByTimestamp,
    addToHistory
  } = require("../models/history_injections");
  const {
    showUserFromEmail
  } = require("../models/user");
  const db = require("../../DB.js")
  const jwt = require('jsonwebtoken');
  
  exports.index = async (req, res) => {
    var decoded = null
    try {
      const token = req.headers.authorization.split(' ')[1];
      decoded = jwt.verify(token, 'pfe_2022');
    } catch (err) {
      return res.status(401).send("Missing Authentification Token");
    }
    
    try {
      const userdb = await (await db.connect()).db().collection('Users')
      const userToVerify = await showUserFromEmail(decoded.email,userdb);  

      const client = await (await db.connect()).db().collection('History_injections')
      const users = await listHistory(client,userToVerify);   
      return res.status(200).json(users);
      
  
    } catch (err) {
      return res.status(400).json(err.message);
    }finally {
      await db.close()
    }
  };
  
  exports.create = async (req, res) => {
    const { body } = req;
  
    if (!body.quantity) {
      return res.status(400).send("Insuline's Quantity is required");
    }

    var decoded = null
    try {
      const token = req.headers.authorization.split(' ')[1];
      decoded = jwt.verify(token, 'pfe_2022');
    } catch (err) {
      return res.status(401).send("Missing Authentification Token");
    }
    
    try {

      const client = await (await db.connect()).db().collection('History_injections')
      const user = await addToHistory(body,client,decoded);
      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).send(err.message);
    }finally {
      await db.close()
    }
  };
  
  exports.showByTimestamp = async (req, res) => {
    var decoded = null
    try {
      const token = req.headers.authorization.split(' ')[1];
      decoded = jwt.verify(token, 'pfe_2022');
    } catch (err) {
      return res.status(401).send("Missing Authentification Token");
    }
    
    try { 
      const client = await (await db.connect()).db().collection('History_injections')
      const info = req.params.timestamp;
      const user = await showHistoryByTimestamp(info,client,decoded);
      return res.status(200).json(user);
    } catch (err) {
      return res.sendStatus(404);
    }finally {
      await db.close()
    }
  };
  