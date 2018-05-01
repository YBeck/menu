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

router.post("/foodItems", (req, res) => {
  const name = req.body.name;
  const ingredients = req.body.ingredients;
  const directions = req.body.directions;
  const categories = req.body.categories;
  db
    .collection("foodItems")
    .insertOne({ name, ingredients, directions, categories })
    .then(results => {
      res.send(JSON.stringify(results));
    })
    .catch(console.error);
});

MongoClient.connect(url, (err, client) => {
  if (err) {
    throw err;
  }
  db = client.db("menu");
});

module.exports = router;
