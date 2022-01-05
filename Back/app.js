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


module.exports = app;
