require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const middleware = function (req, res, next) {
  console.log("yeni bir istek gönderildi");
  next();
};

const middleware2 = function (req, res, next) {
  console.log("Post isteği için istek gönderildi");
  next();
};


app.get("/hello", middleware, function (req, res) {
  console.log("Merhaba, GET isteği attınız");
  res.json("Nodejs Restapi Basic Example");
});

app.put("/hello", middleware, function (req, res) {
  console.log("Merhaba, PUT isteği attınız");
  res.json("Nodejs Restapi Basic Example");
});

app.post("/hello", middleware, middleware2, function (req, res) {
  console.log("Merhaba, POST isteği attınız");
  res.json("Nodejs Restapi Basic Example");
});

app.delete("/hello", middleware, function (req, res) {
  console.log("Merhaba, delete isteği attınız");
  res.json("Nodejs Restapi Basic Example");
});

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
