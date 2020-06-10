import express from "express";
import mongoose from "mongoose";
import Product from "../models/product";
const router = express.Router();

//Routes
//get back all the products
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    //respond with json format
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//create a product
//submit a post
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
    res.json({ message: err });
  }
});

//get a specific product
//add path id param
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete a product
//add path id param
router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const removeProduct = await Product.remove({ _id: req.params.id });
    res.json(removeProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a product
//using patch method
router.patch("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name
        },
      }
    ); 
    res.json(updateProduct)
  } catch (err) {
    res.json({ message: err });
  }
});
export default router;
