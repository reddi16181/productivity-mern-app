const express = require("express");
const mongoose = require("mongoose");

const app = require("./app");

/* Loading the environment variables from the .env file. */
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0/todoapiDB";
console.log(MONGODB_URI)

/* Connecting to the database and then starting the server. */
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, console.log("Server stated on port 5000"));
  })
  .catch((err) => {
    console.log(MONGODB_URI)
    console.log(err);
  });
