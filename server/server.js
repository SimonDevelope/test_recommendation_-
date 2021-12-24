require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const port = process.env.DB_PORT;
const app = express();
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.listen(port, () => {
  console.log(`The Server Running On ${port}`);
});
