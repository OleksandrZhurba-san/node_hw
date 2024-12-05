import mysql from "mysql2"
import "dotenv/config"

const DB_PASS = process.env.DB_PASS;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: DB_PASS,
  database: "product_db",
});

export default connection;
