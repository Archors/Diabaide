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
const createNewUser = (body,client,verify) => {
  const user = {
    first_name: body.first_name,
    last_name: body.last_name,
    birthdate: body.birthdate,
    email: body.email,
    ratio : body.ratio,
    password: bcrypt.hashSync(body.password, 10),
  };

  return new Promise((resolve, reject) => {
    try {
      client.insertOne(user, (err) => {
      if (err) {
        return reject(err);
      } else {
        resolve(user);
      }
    });
  }
  catch (err) {reject(err);}
}
  );
};

// Show user by id
const showUser = async (userId, client) => {
  return new Promise((resolve, reject) => {
    const query = {_id : new mongo.ObjectId(userId)}
    client.find(query,filter).toArray(function(err, result) {
    if (err) reject(err);
    resolve(result)
    });
   
  });
};

// Show user /w email
const showUserFromEmail = async (email, client) => {
  return new Promise((resolve, reject) => {
    const query = {email : email}
    filter =  { projection: {  password: 0}}

    try{
      const user = client.findOne(query,filter )
      resolve(user);
      
    } catch (err) {
      reject(err)
    }
   
  });
};



module.exports = {
  listAllUsers,
  showUser,
  createNewUser,
  showUserFromEmail
};
