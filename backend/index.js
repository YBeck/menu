const express = require("express");
const app = express();
const foodApi = require("./foodItems");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.static(__dirname + "/public"));
app.use("/api", foodApi);

app.listen(8081, () => {
  console.log("Express listening on port 8081");
});
