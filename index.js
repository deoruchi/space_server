const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the space</h1>");
});

app.get("/api", (req, res) => {
  fs.readFile("data.json", "utf-8", (error, data) => {
    if (error) {
      console.log("Error in displaying the data");
    }
    res.json(JSON.parse(data));
  });
});

app.get("/page1", (req, res) => {
  res.sendFile(__dirname + "./files/page1.html");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running ");
});
