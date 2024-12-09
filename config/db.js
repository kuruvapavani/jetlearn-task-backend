require('dotenv').config();
const mysql = require('mysql2/promise');

// Create MySQL connection pool
const mySqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "blog_app"
});

module.exports = mySqlPool;
