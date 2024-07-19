const express = require("express");
const {createAnOrder,getOrderList} = require("../controllre/ordercontroller");
const { authM } = require("../auth");
const Router = express.Router();

Router.post("/order/:id",authM, createAnOrder);
Router.get("/orders",authM, getOrderList);

module.exports = Router;