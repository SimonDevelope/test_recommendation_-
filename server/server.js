require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);
const jwt = require("jsonwebtoken");
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

app.post("/users", (req, res) => {
  const id = req.body._id;
  const password = req.body.password;
  const recommend = req.body.recommend;

  bcrypt.hash(password, salt, (err, hash) => {
    const sql = `INSERT INTO users (_id, password, recommend) VALUES (?,?,?)`;
    const param = [id, hash, recommend];
    connection.query(sql, param, (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json({ message: "200 OK" + `${result}` });
      }
    });
    if (err) throw err;
  });
});

app.post("/users/login", (req, res) => {
  const id = req.body._id;
  const password = req.body.password;
  sql = `select * from users where _id = ?`;
  connection.query(sql, id, (err, results) => {
    const idChecker = results[0];

    if (err) {
      throw err;
    }
    if (!idChecker) {
      res.send("plz check your id and password");
    }
    if (idChecker) {
      bcrypt.compare(password, idChecker.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch) {
          res.send("plz check you password");
        }
        console.log(isMatch); // 여기에서 비밀번호가 맞을 경우 true 반환 아닐 경우 false 반환
      });
    }
  });
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.listen(port, () => {
  console.log(`The Server Running On ${port}`);
});
