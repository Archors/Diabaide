const express = require("express");
const app = express();
var cors = require('cors')

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //Permet de lire du json. Ne pas oublier d'avoir le header Content-Type avec comme valeur application/json
//https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Content-Type
app.use(cors()); // Use this after the variable declaration

//Routes
const userRoutes = require("./app/routes/user");
app.use("/api/v1/users", userRoutes);

const mealRoutes = require("./app/routes/meals");
app.use("/api/v1/meals", mealRoutes);

const historicInjectionsRoutes = require("./app/routes/history_injections");
app.use("/api/v1/history_injections", historicInjectionsRoutes);

const historicGlycemiasRoutesRoutes = require("./app/routes/history_glycemias");
app.use("/api/v1/history_glycemias", historicGlycemiasRoutesRoutes);

const historicMealsRoutes = require("./app/routes/history_meals");
app.use("/api/v1/history_meals", historicMealsRoutes);

const loginRoutes = require('./app/routes/login_routes');
app.use('/api/v1/login', loginRoutes);


module.exports = app;
