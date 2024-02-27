"use strict";

const express = require("express");
const router = express.Router();


// 중요
const controller = require("./home.control");

router.get("/", controller.hello );

router.get("/login", controller.login );

module.exports = router;

