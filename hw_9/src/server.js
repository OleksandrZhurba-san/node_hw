import express from "express";
import bcrypt from "bcrypt";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
