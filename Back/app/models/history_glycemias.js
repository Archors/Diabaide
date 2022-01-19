const mongo = require('mongodb');

//List all the history 
const listHistory = async (history, userToVerify) => {
  return new Promise((resolve, reject) => {
    try{
      const res = history.find({userId : userToVerify._id}).sort({"timestamp":1}).toArray();
      resolve(res);

    } catch (err) {
      reject(err)
    }
  });
};

// Add a new event in history
const addToHistory = (body,client, user) => {
  const history = {
    timestamp: new Date().toISOString(),
    glycemia: body.glycemia,
    userId : user._id
  };

  return new Promise((resolve, reject) => {
    client.insertOne(history, (err) => {
      if (err) {
        return reject(err);
      } else {
        resolve(history);
      }
    });
  });
};


// Show history by date
const showHistoryByTimestamp = async (info, client, userToVerify) => {
    return new Promise((resolve, reject) => {
        var query =   { $and: [ { timestamp: info }, { userId:  userToVerify[0]._id } ] }
        if (/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/.test(info))
        {
            query =  { $and: [ { timestamp :{'$regex' : info, '$options' : 'i'}},  { userId:  userToVerify[0]._id } ] }
        }
        const filter =  { projection: { _id: 0}}
        client.find(query,filter).sort({"timestamp": 1}).toArray(function(err, result) {
        if (err) reject(err);
        resolve(result)
      });
     
    });
  };



module.exports = {
    listHistory,
    showHistoryByTimestamp,
    addToHistory,
    
};
