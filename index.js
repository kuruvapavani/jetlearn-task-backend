const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mySqlPool = require("./config/db")

const app = express();
app.use(express.json());
// routes

app.get("/users", (req, res) => {
  res.status(200).send("<h1> Hello </h1>");
});


mySqlPool
  .query('SELECT 1')
  .then(() => {
    console.log('MySQL db connected successfully');
    app.listen(process.env.PORT, () => {
      console.log(`Server running successfully on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error.stack || error);
  })