const {
  listHistory,
  showHistoryByTimestamp,
  addToHistory,
  deleteGlycemia,
} = require("../models/history_glycemias");
const db = require("../../DB.js");
const jwt = require("jsonwebtoken");

//Show all the glycemia history of the user
exports.index = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022"); //get the token and decrypt it
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect())
      .db()
      .collection("History_glycemie"); //connexion to the collection History_glycemie in db
    const meals = await listHistory(client, decoded); // go to the function in model
    return res.status(200).json(meals); // return the array of result if good
  } catch (err) {
    return res.status(400).json(err.message);
  } finally {
    await db.close();
  }
};

// Create or add an element to the History_glycemie
exports.create = async (req, res) => {
  const { body } = req;

  if (!body.glycemia) {
    //Only the Glycemia is mandatory
    return res.status(400).send("glycemia is required");
  }
  var decoded = null;

  try {
    //Verfify if the user is connected and get its id
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect())
      .db()
      .collection("History_glycemie"); //connexion to the db and History_glycemie
    const user = await addToHistory(body, client, decoded); // go to the model folder
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).send(err.message);
  } finally {
    await db.close();
  }
};

//Show a particular time of the history by timestamp
exports.showByTimestamp = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect())
      .db()
      .collection("History_glycemie");
    const info = req.params.timestamp; // Need the timestap in the url
    const user = await showHistoryByTimestamp(info, client, decoded); // go to the model folder
    return res.status(200).json(user);
  } catch (err) {
    return res.sendStatus(404);
  } finally {
    await db.close();
  }
};

//Delete the last Hisotry recorded for the glycemias
exports.delete = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect())
      .db()
      .collection("History_glycemie");
    const glyc = await deleteGlycemia(client, decoded);
    return res.sendStatus(200);
  } catch (err) {
    return res.status(401).send("Can't delete the last glycemias");
  }
};
