const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

require('dotenv').config()

const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "user",
  password: "password",
  database: "db",
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  const sqlSelect = "SELECT * FROM user_info;";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get(`/api/:id`, (req, res) => {
  const sqlSelect = `SELECT * FROM user_info WHERE ID=${req?.params.id}`;

  db.query(sqlSelect, (err, result) => {
    res.send(result[0]);
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
