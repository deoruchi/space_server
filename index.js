const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the space</h1>");
});

app.get("/page1", (req, res) => {
  res.sendFile(__dirname + "/files/page1.html");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running ");
});
