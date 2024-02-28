"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅 root directory
const hello = require("./src/routes/home");

// 앱 세팅
app.use("/", hello);
// 디렉터리 설정 ( 미들웨어 연결 , 정적경로로 추가)
app.use(express.static(`${__dirname}/src/public/`));

app.set("views", "./src/views");
app.set("view engine", "ejs");


module.exports = app;