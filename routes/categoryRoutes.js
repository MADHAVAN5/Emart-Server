const express = require('express');
const categoryConroller = require('../controller/categoryConroller');

const categoryRouter = express.Router();

categoryRouter.get("/getall",categoryConroller.getall);
// router.post("/login",authController.login);

module.exports = categoryRouter;