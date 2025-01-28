import express from "express";
import cors from "cors";
import "dotenv/config";
import Book from "./models/books.js";
import sequelize from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/books", async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const newBook = req.body;
    await Book.create(newBook);
    res.status(201).json({ message: "New book has been added" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const newBookData = req.body;
    await Book.update(newBookData, { where: { id: bookId } });
    res.status(201).json({ message: "Book has been updated" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    await Book.destroy({ where: { id: bookId } });
    res.status(201).json({ message: "Book has been deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.use((_req, res, _next) => {
  res.status(404).send("404: Page Not Found");
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to DB has been established");
    console.log(`server listening on port ${PORT}`);
  } catch (error) {
    console.error("Error occurred while connecting to DB: ", error);
  }
});
