import express from 'express';
import data from './data'
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("hello world"));

app.get("/api/products", function (req, res) {
  res.send(data.products);
});

app.listen(port, () => {
  console.log("server started at http://localhost:3000");
});
