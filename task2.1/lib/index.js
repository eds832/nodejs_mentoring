"use strict";

var express = require("express");
var app = express();
var userRouter = require("./routes/userRouter.js");

app.use(express.json());

app.use("/users", userRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

app.listen(5000);