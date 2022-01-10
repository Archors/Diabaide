const mongo = require('mongodb');

const listAllMeals = async (user) => {
    return new Promise((resolve, reject) => {
      try{
        const res = user.find({}).toArray();
        resolve(res);
  
      } catch (err) {
        reject(err)
      }
    });
  };


  const createNewMeal = (body,client) => {
    const meal = {
      name: body.name,
      glycemie: body.glycemie,
      brand: body.brand,
    };
  
    return new Promise((resolve, reject) => {
      client.insertOne(meal, (err) => {
        if (err) {
          return reject(err);
        } else {
          resolve(meal);
        }
      });
    });
  };
  
  const showMealByName = async (meal, client) => {
    return new Promise((resolve, reject) => {
      const query = {name : meal}
      filter =  { projection: { _id: 0}}
      client.find(query, filter).toArray(function(err, result) {
      if (err) reject(err);
      resolve(result)
      });
     
    });
  };

  const showMealByBrand = async (info, client) => {
    return new Promise((resolve, reject) => {
      const query = {name : info.name, brand : info.brand}
      client.find(query,filter).toArray(function(err, result) {
      if (err) reject(err);
      resolve(result)
      });
     
    });
  };
  
  
  
  
  module.exports = {
    listAllMeals,
    showMealByName,
    showMealByBrand,
    createNewMeal
  };
  