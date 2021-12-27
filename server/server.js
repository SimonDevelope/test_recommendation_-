require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);
const port = process.env.DB_PORT;
const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/Users", (req, res) => {
  const id = req.body.ID;
  const password = req.body.PassWord;
  const recommend = req.body.Recommend;

  bcrypt.hash(password, salt, (err, hash) => {
    const sql = `INSERT INTO Users (email, password, recommend) VALUES (?,?,?)`;
    const param = [id, hash, recommend];
    connection.query(sql, param, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json({ message: "200 OK" });
      }
    });
    if (err) throw err;
  });
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.listen(port, () => {
  console.log(`The Server Running On ${port}`);
});
