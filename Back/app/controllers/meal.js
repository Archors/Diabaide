const {
  listAllMeals,
  showMeal,
  showMealByBrand,
  createNewMeal,
} = require("../models/meals");
const { showUserFromEmail } = require("../models/user");
const db = require("../../DB.js");
const jwt = require("jsonwebtoken");

//List all the meals of the connected user
exports.index = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }
  try {
    const mealsdb = await (await db.connect()).db().collection("Meals");
    const meals = await listAllMeals(mealsdb, decoded);
    return res.status(200).json(meals);
  } catch (err) {
    return res.status(400).json(err.message);
  } finally {
    await db.close();
  }
};

//Create or add a new value in the collecition
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

  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect()).db().collection("Meals");
    const meal = await createNewMeal(body, client, decoded);
    return res.status(201).json(meal);
  } catch (err) {
    return res.status(400).send(err.message);
  } finally {
    await db.close();
  }
};


//SHow a specific meal by its (their) name
exports.show = async (req, res) => {
  var decoded = null;
  try {
    const token = req.headers.authorization.split(" ")[1];
    decoded = jwt.verify(token, "pfe_2022");
  } catch (err) {
    return res.status(401).send("Missing Authentification Token");
  }

  try {
    const client = await (await db.connect()).db().collection("Meals");
    const info = req.params.meal;
    const meal = await showMeal(info, client, decoded);
    return res.status(200).json(meal);
  } catch (err) {
    return res.sendStatus(404);
  } finally {
    await db.close();
  }
};

// show a specific meal by name and brand
exports.showFromBrand = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  var decoded = jwt.verify(token, "pfe_2022");
  try {
    const client = await (await db.connect()).db().collection("Meals");
    const info = req.params;
    const meal = await showMealByBrand(info, client, decoded);
    return res.status(200).json(meal);
  } catch (err) {
    return res.sendStatus(404);
  } finally {
    await db.close();
  }
};
