"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅 root directory
const hello = require("./routes/home");

// 앱 세팅
app.use("/", hello);
app.set("views", "./views");
app.set("view engine", "ejs");


module.exports = app;