const {
  listAllUsers,
} = require("../models/user");
const db = require("../../DB.js")

exports.index = async (req, res) => {
  try {
    const client = await db.connect()
    const users = await listAllUsers(client);
    await db.close()
    return res.status(200).json(users);
    

  } catch (err) {
    return res.status(400).json(err.message);
  }finally {
  }
};
