const {
    listHistory,
    showHistoryByTimestamp,
    addToHistory
  } = require("../models/history_meals");
  const db = require("../../DB.js")
  
  exports.index = async (req, res) => {
    try {
      const client = await (await db.connect()).db().collection('History_meals')
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
  
    if (!body.meal) {
      return res.status(400).send("Meal is required");
    }

    try {
      const client = await (await db.connect()).db().collection('History_meals')
      const user = await addToHistory(body,client);
      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  };
  
  exports.showByTimestamp = async (req, res) => {
    try {
      const client = await (await db.connect()).db().collection('History_meals')
      const info = req.params.timestamp;
      const user = await showHistoryByTimestamp(info,client);
      return res.status(200).json(user);
    } catch (err) {
      return res.sendStatus(404);
    }
  };
  