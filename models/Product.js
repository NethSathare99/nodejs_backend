const productModel = require('../routes/product');
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
  //Insert a record in the "customers" table:
  var sql = "INSERT INTO products (product_name, price, quantity) VALUES ('Green Tea', '$5.43', '5')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  return router;
});
