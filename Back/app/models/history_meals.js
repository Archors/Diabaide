const mongo = require('mongodb');

//List all the history 
const listHistory = async (history,userToVerify) => {
  return new Promise((resolve, reject) => {
    try{
      const res = history.find({userId : userToVerify._id}).sort({"timestamp":-1}).toArray();
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
    meal: body.meal,
    userId : new mongo.ObjectId(user._id)
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

const updateHistory = (client,timestamp, body,user) => {
  const newH ={$set: {
    meal: body.meal
  }};

  const history =  { $and: [ { timestamp: timestamp }, { userId:  userToVerify._id } ] };

  return new Promise((resolve, reject) => {
    client.updateOne(history,newH, (err) => {
      if (err) {
        return reject(err);
      } else {
        resolve(history);
      }
    });
  });
};

// Show history by date
const showHistoryByTimestamp = async (info, client,userToVerify) => {
    return new Promise((resolve, reject) => {
        var query =   { $and: [ { timestamp: info }, { userId:  userToVerify._id } ] }
        if (/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/.test(info))
        {
          query =  { $and: [ { timestamp :{'$regex' : info, '$options' : 'i'}},  { userId:  userToVerify._id } ] }
        }
        const filter =  { projection: { _id: 0}}
        client.find(query,filter).sort({"timestamp":-1}).toArray(function(err, result) {
        if (err) reject(err);
        resolve(result)
      });
     
    });
  };

  const deleteHistoryMeal = (client, decoded) => {
  
    return new Promise((resolve, reject) => {
      try{

      client.findOneAndDelete({userId : new mongo.ObjectId(decoded._id)},{ "sort": { "_id": -1 } })
      }catch(err){
        return reject(err);

      }
    });
  };


module.exports = {
    listHistory,
    showHistoryByTimestamp,
    addToHistory,
    updateHistory,
    deleteHistoryMeal
    
};
