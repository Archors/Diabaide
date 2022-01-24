const mongo = require('mongodb');


// List all meals in the app
const listAllMeals = async (meals, userToVerify) => {
    return new Promise((resolve, reject) => {
      try{
        const res = meals.find({userId : new mongo.ObjectId(userToVerify._id)}).sort({"name": 1}).toArray();
        resolve(res);
  
      } catch (err) {
        reject(err)
      }
    });
  };

// Create a Meal
  const createNewMeal = (body,client, user) => {
    const meal = {
      name: body.name,
      sugar: body.sugar,
      brand: body.brand,
      barCode : body.barCode,
      userId : new mongo.ObjectId(user._id)
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
  const showMeal = async (meal, client,userToVerify) => {
    return new Promise((resolve, reject) => {
      var query =  { $and: [ { name: meal }, { userId: new mongo.ObjectId(userToVerify._id) } ] }
      if (/\d{8}/.test(meal))
        query =  { $and: [ { barcode: meal }, { userId: new mongo.ObjectId(userToVerify._id)} ] }
      filter =  { projection: { _id: 0}}
      client.find(query, filter).toArray(function(err, result) {
      if (err) reject(err);
      resolve(result)
      });
     
    });
  };

  // Show meal by its name and brand
  const showMealByBrand = async (info, client,userToVerify) => {
    return new Promise((resolve, reject) => {
      const query = { $and: [ { name: info.meal }, { brand: info.brand }, { userId: new mongo.ObjectId(userToVerify._id) } ] }
      filter =  { projection: { _id: 0}}
      client.find(query,filter).toArray(function(err, result) {
      if (err) reject(err);
      resolve(result)
      });
     
    });
  };
  
  module.exports = {
    listAllMeals,
    showMeal,
    showMealByBrand,
    createNewMeal
  };
  