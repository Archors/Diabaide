const {
  listAllUsers,
  showUser,
  createNewUser
} = require("../models/user");
const db = require("../../DB.js")

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
    return res.status(400).send("Fisrt name is required");
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
    const user = await createNewUser(body,client);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }finally {
    await db.close()
  }
};

exports.show = async (req, res) => {
  try {
    const client = await (await db.connect()).db().collection('Users')
    const userId = req.params.userId;
    const user = await showUser(userId,client);
    return res.status(200).json(user);
  } catch (err) {
    return res.sendStatus(404);
  }finally {
    await db.close()
  }
};
