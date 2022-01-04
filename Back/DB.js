const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://diabaide:diabaide@cluster0.ixapo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
db = mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database '+ err)}
);
module.exports = db;