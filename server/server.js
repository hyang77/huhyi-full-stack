import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import productRoute from "./routes/route";

const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes

app.use("/api/products", productRoute);

//connect to db
const url = process.env.MY_CONNECTION;
mongoose.connect(
  url,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  function (error) {
    if (error) throw error;
    console.log(`connect mongodb success`);
  }
);

app.listen(port, () => {
  console.log("server started at http://localhost:4000");
});
