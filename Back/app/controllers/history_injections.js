const {
    listHistory,
    showHistoryByTimestamp,
    addToHistory,
    deleteInjection
  } = require("../models/history_injections");
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

      const client = await (await db.connect()).db().collection('History_injections')
      const injections = await listHistory(client,decoded);   
      return res.status(200).json(injections);
      
  
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

  exports.delete = async (req, res) => {
    var decoded = null
    try {
      const token = req.headers.authorization.split(' ')[1];
      decoded = jwt.verify(token, 'pfe_2022');
    } catch (err) {
      return res.status(401).send("Missing Authentification Token");
    }

    try{
      const client = await (await db.connect()).db().collection('History_injections')
      await deleteInjection(client,decoded);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(401).send("Can't delete the last injection");
    }
  };
