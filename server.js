const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const productRoute = require('./routes/product');



dotenv.config();

const options = {
  host: "10.0.2.2",
  
  user: "root",
  password: "Abc123@#",
  database: "spices_island_tea",
  timezone: "+00:00",
  charset: "utf8mb4_general_ci",
};

const connection = mysql.createPool(options);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/product', productRoute(connection));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, function () {
  console.log("Server listening on port " + PORT);
});


module.exports = connection;


server.timeout = '';

