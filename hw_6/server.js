import express from "express";
import cors from "cors";
import "dotenv/config";
import connection from "./db/config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello world");
});

app.post("/", (req, res) => {
  const { name } = req.body;

  if (name) {
    res.send(`Welcome, ${email}`)
  } else {
    res.status(400).json({ error: "Wrong request!" })
  }
});

app.get("/products", (_req, res) => {
  const query = "select * from products";
  connection.query(query, (err, data) => {
    if (err) {
      res.status(500).json({ error: err })
      console.log(err);
      return;
    }
    res.status(200).json({ data, message: " all products" });
  })
});
app.post("/products", (req, res) => {
  const { product, price } = req.body;

  if (!product || !price) {
    return res.status(400).send("Product and price are required.");
  }
  const query = "insert into products (name, price) values (?, ?)";
  connection.query(query, [product, price], (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).json({ error: "Error while adding product" })
      return;
    }
    res.status(201).json({ messsage: `${product} with ${price} has been added` })
  })
})

app.use((_req, res, _next) => {
  res.status(404).send("404: Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
