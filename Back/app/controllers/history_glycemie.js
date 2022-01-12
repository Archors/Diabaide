const {
    listHistory,
    showHistoryByTimestamp,
    addToHistory
  } = require("../models/history_glycemie");
  const db = require("../../DB.js")
  
  exports.index = async (req, res) => {
    try {
      const client = await (await db.connect()).db().collection('History_glycemie')
      const users = await listHistory(client);   
      return res.status(200).json(users);
      
  
    } catch (err) {
      return res.status(400).json(err.message);
    }finally {
      await db.close()
    }
  };
  
  exports.create = async (req, res) => {
    const { body } = req;
  
    if (!body.rate) {
      return res.status(400).send("Glycemie is required");
    }

    try {
      const client = await (await db.connect()).db().collection('History_glycemie')
      const user = await addToHistory(body,client);
      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  };
  
  exports.showByTimestamp = async (req, res) => {
    try {
      const client = await (await db.connect()).db().collection('History_glycemie')
      const info = req.params.timestamp;
      const user = await showHistoryByTimestamp(info,client);
      return res.status(200).json(user);
    } catch (err) {
      return res.sendStatus(404);
    }
  };
  