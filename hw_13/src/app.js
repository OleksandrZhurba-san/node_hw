import express from "express"
import "dotenv/config"
import { connectDb } from "./config/db.js";

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

connectDb();

app.get("/", (_req, res) => {
  res.status(200).json({ message: "hello there" })
})

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`)
})
