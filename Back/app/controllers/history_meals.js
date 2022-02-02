const {
  listHistory,
  showHistoryByTimestamp,
  addToHistory,
  updateHistory,
  deleteHistoryMeal,
} = require("../models/history_meals");
const { showUserFromEmail } = require("../models/user");
const db = require("../../DB.js");
const jwt = require("jsonwebtoken");

//Show all the value of the collection for a specific user
exports.index = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const userdb = await (await db.connect()).db().collection("Users");
    const userToVerify = await showUserFromEmail(decoded.email, userdb);

    const client = await (await db.connect()).db().collection("History_meals");
    const users = await listHistory(client, userToVerify);
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err.message);
  } finally {
    await db.close();
  }
};

//Create or Add a new value to the collection
exports.create = async (req, res) => {
  const { body } = req;

  if (!body.meal) {
    //Thew meal is mandatory / it s an array
    return res.status(400).send("Meal is required");
  }

  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const userdb = await (await db.connect()).db().collection("Users");
    const userToVerify = await showUserFromEmail(decoded.email, userdb);

    const client = await (await db.connect()).db().collection("History_meals");
    const user = await addToHistory(body, client, userToVerify);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).send(err.message);
  } finally {
    await db.close();
  }
};

//Update a specific value thx to the timestamp
exports.updateByTimestamp = async (req, res) => {
  const { body } = req; // in body
  const timestamp = req.params.timestamp; //in url

  if (!body.meal) {
    return res.status(400).send("Meal is required");
  }

  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const userdb = await (await db.connect()).db().collection("Users");
    const userToVerify = await showUserFromEmail(decoded.email, userdb);

    const client = await (await db.connect()).db().collection("History_meals");
    const updt = await updateHistory(client, timestamp, body, userToVerify);
    return res.status(200).json(updt);
  } catch (err) {
    return res.status(400).send(err.message);
  } finally {
    await db.close();
  }
};

//Show a specific value by timestamp
exports.showByTimestamp = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const userdb = await (await db.connect()).db().collection("Users");
    const userToVerify = await showUserFromEmail(decoded.email, userdb);

    const client = await (await db.connect()).db().collection("History_meals");
    const info = req.params.timestamp;
    const user = await showHistoryByTimestamp(info, client, userToVerify);
    return res.status(200).json(user);
  } catch (err) {
    return res.sendStatus(404);
  } finally {
    await db.close();
  }
};

//Delete the last value of the collection
exports.delete = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect()).db().collection("History_meals");
    const meal = await deleteHistoryMeal(client, decoded); //GO to the Model Folder / Delete a value in hostory Meal
    return res.status(204).json(meal);
  } catch (err) {
    return res.status(401).send("Can't delete the last glycemias");
  }
};
