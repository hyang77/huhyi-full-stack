import express from "express";
import mongoose from "mongoose";
import Product from "../models/product";
const router = express.Router();

//Routes
//get all the products
router.get("/", function (req, res) {
  res.send("We are on product api");
});

//create a product
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
  });

  console.log(req.body);

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
      } catch (err) {
        res.json({message: err})
      }
});

export default router;
