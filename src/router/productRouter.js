const express = require("express");
const {createProduct,getallProducts,updateProduct,Deleteproduct} = require("../controllre/productcontroller");
const { authM } = require("../auth");
const Router = express.Router();

Router.post("/product", authM, createProduct);
Router.get("/products", authM, getallProducts);
Router.put("/updateproduct/:id",authM,updateProduct);
Router.delete("/deleteproduct/:id",authM,Deleteproduct);

module.exports = Router;
