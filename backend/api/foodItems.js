const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const ObjectId = mongo.ObjectID;
const url = "mongodb://localhost:27017/";
let db;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/foodItem/:id", (req, res) => {
  db
    .collection("foodItems")
    .find({ _id: ObjectId(req.params.id) })
    .toArray((err, item) => {
      if (err) {
        console.error(err);
        res.end("something went wrong getting the data");
      }
      res.end(JSON.stringify(item));
    });
});

router.get("/foodItems/:category", (req, res) => {
  db
    .collection("foodItems")
    .find({ categories: req.params.category })
    .project({ name: 1 })
    .toArray((err, items) => {
      if (err) {
        console.error(err);
        res.end("something went wrong getting the data");
      }
      res.end(JSON.stringify(items));
    });
});

router.post("/foodItem", (req, res) => {
  db
    .collection("foodItems")
    .insertOne(req.body)
    .then(() => {
      res.status(200).end();
    })
    .catch(console.error);
});

router.delete("/foodItem/:id", (req, res) => {
  db
    .collection("foodItems")
    .findOneAndDelete({ _id: ObjectId(req.params.id) })
    .then(() => {
      res.status(200).end();
    })
    .catch(console.error);
});

router.put("/foodItem/:id", (req, res) => {
  console.log("id ", req.params.id);
  console.log("body ", req.body);
  db
    .collection("foodItems")
    .update({ _id: ObjectId(req.params.id) }, { $set: req.body })
    .then(() => {
      res.status(200).end();
    })
    .catch(console.error);
});

MongoClient.connect(url, (err, client) => {
  if (err) {
    throw err;
  }
  db = client.db("menu");
});

module.exports = { first: router };
