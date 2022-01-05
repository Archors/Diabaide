const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://diabaide:diabaide@cluster0.ixapo.mongodb.net/diabaide?retryWrites=true&w=majority";
const db = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;