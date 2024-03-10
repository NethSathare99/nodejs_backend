const express = require('express');
const router = express.Router();
var mysql = require ('mysql2');

var con = mysql.createConnection({
    host: "10.0.2.2",
    user: "root",
    password: "Abc123@#",
    database: "spices_island_tea"
  });

  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO products (username, password) VALUES (?, ?)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("already record inserted");
  });

  return router;
});