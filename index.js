const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the space</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running ");
});
