const {
  listAllUsers,
  createNewUser,
  showUser,
  updateUser,
  deleteUser,
  showUserFromEmail,
} = require("../models/user");

exports.index = async (req, res) => {
  try {
    const users = await listAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
