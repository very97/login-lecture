"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅 root directory
const hello = require("./src/routes/home");

// 앱 세팅
app.use("/", hello);
app.set("views", "./src/views");
app.set("view engine", "ejs");


module.exports = app;
//테스트입