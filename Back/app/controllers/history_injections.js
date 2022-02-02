const {
  listHistory,
  showHistoryByTimestamp,
  addToHistory,
  deleteInjection,
} = require("../models/history_injections");
const db = require("../../DB.js");
const jwt = require("jsonwebtoken");

//Show all the injections' history of the user
exports.index = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  // try to connect to the collection and run the promiseF
  try {
    const client = await (await db.connect())
      .db()
      .collection("History_injections");
    const injections = await listHistory(client, decoded); //go to the model folder / List all the hisotry
    return res.status(200).json(injections);
  } catch (err) {
    return res.status(400).json(err.message);
  } finally {
    await db.close();
  }
};

//Create or add a new value in Injections history
exports.create = async (req, res) => {
  const { body } = req;

  if (!body.quantity) {
    // Only the quantity injected is mandatory
    return res.status(400).send("Insuline's Quantity is required");
  }

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
      .collection("History_injections");
    const user = await addToHistory(body, client, decoded); // Go to the model folder / Add the value
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).send(err.message);
  } finally {
    await db.close();
  }
};

//SHow a specific value by timestamp
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
      .collection("History_injections");
    const info = req.params.timestamp; //Timestamp required in url
    const user = await showHistoryByTimestamp(info, client, decoded);
    return res.status(200).json(user);
  } catch (err) {
    return res.sendStatus(404);
  } finally {
    await db.close();
  }
};

//Delete the last value recorded
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
      .collection("History_injections");
    await deleteInjection(client, decoded);
    return res.sendStatus(200);
  } catch (err) {
    return res.status(401).send("Can't delete the last injection");
  }
};
