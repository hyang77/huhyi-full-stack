import express from "express";
import mongoose from "mongoose";
import Product from "../models/product";
import multer from "multer";
import fs from "fs";
const router = express.Router();
//specify how to store the image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  //reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
    console.log("upload failed");
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

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
router.post("/", upload.single("image"), async (req, res) => {
  console.log(req.file);
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    image: req.file.originalname, //req.file.path
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
  console.log(req.file);
  try {
    fs.unlink(
      "C:\\Users\\uee85\\huhyi-full-stack\\server\\uploads\\" +
        req.file.originalname,
      (err) => {
        if (err) {
          console.log("failed to delete local image:" + err);
        } else {
          console.log("successfully deleted local image");
        }
      }
    );
    const removeProduct = await Product.remove({ _id: req.params.id });
    res.json(removeProduct);
  } catch (err) {
    res.json({ message: err });
  }
});
//update a product
//using patch method
router.put("/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await Product.findByIdAndUpdate(id, updates, options);
    res.send(result);
  } catch (err) {
    console.log(error.message);
  }
});
export default router;
