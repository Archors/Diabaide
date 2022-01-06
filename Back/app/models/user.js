const listAllUsers = async (client) => {
  return new Promise((resolve, reject) => {
    try{
      const user = client.db('diabaide').collection('Users');
      const res = user.find({}).toArray();
      resolve(res);

    } catch (err) {
      reject(err)
    }
  });
};


module.exports = {
  listAllUsers
};
