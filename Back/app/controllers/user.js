const {
  listAllUsers,
  createNewUser,
  showUserFromEmail,
  updateUser,
  updatePwd
} = require("../models/user");
const db = require("../../DB.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.index = async (req, res) => {
  try {
    const client = await (await db.connect()).db().collection('Users')
    const users = await listAllUsers(client);   
    return res.status(200).json(users);
    

  } catch (err) {
    return res.status(400).json(err.message);
  }finally {
    await db.close()
  }
};

exports.create = async (req, res) => {
  const { body } = req;

  if (!body.first_name) {
    return res.status(400).send("First name is required");
  }
  if (!body.ratio) {
    return res.status(400).send("Glycemie Ratio is required");
  }
  if (!body.last_name) {
    return res.status(400).send("Last name is required");
  }
  if (!body.birthdate) {
    return res.status(400).send("Birthdate is required");
  }
  if (!body.email) {
    return res.status(400).send("Email is required");
  }
  if (!body.password) {
    return res.status(400).send("Password is required");
  }

  try {
    const client = await (await db.connect()).db().collection('Users')
    const userVerify = await showUserFromEmail(body.email, client);
    if (userVerify) {
      return res.status(400).send("Email already used");
    }
    const user = await createNewUser(body,client);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }finally {
    await db.close()
  }
};

exports.show = async (req, res) => {
  var decoded = null
  try {
    const token = req.headers.authorization.split(' ')[1];
    decoded = jwt.verify(token, 'pfe_2022');
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect()).db().collection('Users')
    const user = await showUserFromEmail(decoded.email, client);
    return res.status(200).json(user);
  } catch (err) {
    return res.sendStatus(404);
  }finally {
    await db.close()
  }
};

exports.showFromEmail = async (req, res) => {
  try {
    const client = await (await db.connect()).db().collection('Users')
    const email = req.params.email;
    const user = await showUserFromEmail(client,email);
    return res.status(200).json(user);
  } catch (err) {
    return res.sendStatus(404);
  }
};



exports.update = async (req, res) => {
  const { body } = req;

  var updated = {};

  if (body.first_name) {
    updated.first_name = body.first_name
  }
  if (body.ratio) {
    updated.ratio = body.ratio
  }
  if (body.last_name) {
    updated.last_name = body.last_name
  }
  if (body.birthdate) {
    updated.birthdate = body.birthdate
  }
  if (body.email) {
    updated.email = body.email
  }
  updated = { $set: updated }
  var decoded = null
  try {
    const token = req.headers.authorization.split(' ')[1];
    decoded = jwt.verify(token, 'pfe_2022');
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, 'pfe_2022');

    const client = await (await db.connect()).db().collection('Users')
    const userVerify = await showUserFromEmail(decoded.email, client);

    const user = await updateUser(client,userVerify, updated);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(401).send(error.message);
  }
};

exports.updatePwd = async (req, res) => {
  const { body } = req;

  var updated = {};

  if (body.password) {
    updated.password = bcrypt.hashSync(body.password, 10)
  }
  
  updated = { $set: updated }

  var decoded = null
  try {
    const token = req.headers.authorization.split(' ')[1];
    decoded = jwt.verify(token, 'pfe_2022');
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect()).db().collection('Users')
    const userVerify = await showUserFromEmail(decoded.email, client);
    const authentification= bcrypt.compareSync(body.oldPassword, userVerify.password);
    if (!authentification)
      return res.status(400).send("Wrong Password m8");
    const user = await updateUser(client,userVerify, updated);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(401).send(error.message);
  }
};
