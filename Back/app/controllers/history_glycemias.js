const {
    listHistory,
    showHistoryByTimestamp,
    addToHistory,
    deleteGlycemia
  } = require("../models/history_glycemias");
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

      const client = await (await db.connect()).db().collection('History_glycemie')
      const meals = await listHistory(client,decoded); 
      return res.status(200).json(meals);
  
    } catch (err) {
      return res.status(400).json(err.message);
    }finally {
      await db.close()
    }
  };
  
  exports.create = async (req, res) => {
    const { body } = req;
  
    if (!body.glycemia) {
      return res.status(400).send("glycemia is required");
    }

    var decoded = null
    try {
      const token = req.headers.authorization.split(' ')[1];
      decoded = jwt.verify(token, 'pfe_2022');
    } catch (err) {
      return res.status(401).send("Missing Authentification Token");
    }
    
    try {
      const client = await (await db.connect()).db().collection('History_glycemie')
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
      
      const client = await (await db.connect()).db().collection('History_glycemie')
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
      const client = await (await db.connect()).db().collection('History_glycemie')
      const glyc = await deleteGlycemia(client,decoded);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(401).send("Can't delete the last glycemias");
    }
  };
  