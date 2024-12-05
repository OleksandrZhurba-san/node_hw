import connection from "./config.js";

const createUserTable = `
 CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL
  )
`;

connection.connect((err) => {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log("Connection established");
});

connection.query(createUserTable, (err, _result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`created table ${createUserTable}`);
  connection.end();
});
