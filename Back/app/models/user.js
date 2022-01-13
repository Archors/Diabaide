const bcrypt = require('bcrypt');
const mongo = require('mongodb');


//List all Users 
// To delete
const listAllUsers = async (user) => {
  return new Promise((resolve, reject) => {
    try{
      const res = user.find({}).toArray();
      resolve(res);

    } catch (err) {
      reject(err)
    }
  });
};

// Create a new user
const createNewUser = (body,client) => {
  const user = {
    first_name: body.first_name,
    last_name: body.last_name,
    birthdate: body.birthdate,
    email: body.email,
    ratio : body.ratio,
    password: bcrypt.hashSync(body.password, 10),
  };

  return new Promise((resolve, reject) => {
    client.insertOne(user, (err) => {
      if (err) {
        return reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

// Show user by id
const showUser = async (userId, client) => {
  return new Promise((resolve, reject) => {
    const query = {_id : new mongo.ObjectId(userId)}
    client.findOne(query,function(err, result) {
    if (err) reject(err);
    resolve(result)
    });
   
  });
};



module.exports = {
  listAllUsers,
  showUser,
  createNewUser
};
