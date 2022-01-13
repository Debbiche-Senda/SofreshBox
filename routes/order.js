const express = require("express");
const { addOrder, getProduct, getProducts, editProduct, deleteProduct } = require("../controllers/order.controller");

const Router = express.Router();

Router.post("/add-product", addOrder);
Router.get("/getProducts", getProducts);
Router.get("/:_id", getProduct);
Router.put("/:_id", editProduct );
Router.delete("/:_id", deleteProduct);





module.exports = Router;