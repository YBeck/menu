const express = require("express");
const app = express();
const foodApi = require("./api/foodItems").first;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
  next();
});
app.use(express.static(__dirname + "/public"));
app.use("/api", foodApi);

app.listen(8081, () => {
  console.log("Express listening on port 8081");
});
