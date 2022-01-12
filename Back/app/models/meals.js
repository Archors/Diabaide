const mongo = require('mongodb');


// List all meals in the app
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

// Create a Meal
  const createNewMeal = (body,client) => {
    const meal = {
      name: body.name,
      sugar: body.sugar,
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
  
// Show meal by its name
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

  // Show meal by its name and brand
  const showMealByBrand = async (info, client) => {
    return new Promise((resolve, reject) => {
      const query = { $and: [ { name: info.meal }, { brand: info.brand } ] }
      filter =  { projection: { _id: 0}}
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
  