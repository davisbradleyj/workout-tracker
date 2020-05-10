
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PORT = process.env.PORT || 8000;
const db = require(__dirname,"./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });