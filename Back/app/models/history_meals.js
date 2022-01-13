const mongo = require('mongodb');

//List all the history 
const listHistory = async (history) => {
  return new Promise((resolve, reject) => {
    try{
      const res = history.find({}).toArray();
      resolve(res);

    } catch (err) {
      reject(err)
    }
  });
};

// Add a new event in history
const addToHistory = (body,client) => {
  const history = {
    timestamp: new Date().toISOString(),
    meal: body.meal
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

const updateHistory = (client,timestamp, body) => {
  const newH ={$set: {
    meal: body.meal
  }};

  const history = {
    timestamp: timestamp
  };

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
const showHistoryByTimestamp = async (info, client) => {
    return new Promise((resolve, reject) => {
        var query =  {timestamp :  info}
        if (/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/.test(info))
        {
            query =  { timestamp :{'$regex' : info, '$options' : 'i'}}
        }
        const filter =  { projection: { _id: 0}}
        client.find(query,filter).toArray(function(err, result) {
        if (err) reject(err);
        resolve(result)
      });
     
    });
  };



module.exports = {
    listHistory,
    showHistoryByTimestamp,
    addToHistory,
    updateHistory
    
};
