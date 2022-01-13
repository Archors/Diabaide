const {
    listAllMeals, showMeal,
    showMealByBrand,
    createNewMeal
  } = require("../models/meals");
  const db = require("../../DB.js")
  
  exports.index = async (req, res) => {
    try {
      const client = await (await db.connect()).db().collection('Meals')
      const meals = await listAllMeals(client);   
      return res.status(200).json(meals);
      
  
    } catch (err) {
      return res.status(400).json(err.message);
    }finally {
      await db.close()
    }
  };

  exports.create = async (req, res) => {
    const { body } = req;
  
    if (!body.name) {
      return res.status(400).send("Name is required");
    }
    if (!body.sugar) {
      return res.status(400).send("Sugar rate is required");
    }
    if (!body.brand) {
      return res.status(400).send("Brand is required");
    }
  
    try {
      const client = await (await db.connect()).db().collection('Meals')
      const meal = await createNewMeal(body,client);
      return res.status(201).json(meal);
    } catch (err) {
      return res.status(400).send(err.message);
    }finally {
      await db.close()
    }
  };
  
  exports.show = async (req, res) => {
    try {
      const client = await (await db.connect()).db().collection('Meals')
      const info = req.params.meal;
      const meal = await showMeal(info,client);
      return res.status(200).json(meal);
    } catch (err) {
      return res.sendStatus(404);
    }finally {
      await db.close()
    }
  };

  exports.showFromBrand = async (req, res) => {
    try {
      const client = await (await db.connect()).db().collection('Meals')
      const info = req.params;
      const meal = await showMealByBrand(info,client);
      return res.status(200).json(meal);
    } catch (err) {
      return res.sendStatus(404);
    }finally {
      await db.close()
    }
  };