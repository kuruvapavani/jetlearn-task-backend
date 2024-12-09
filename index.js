const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mySqlPool = require("./config/db");

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Routes
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/posts", require("./routes/postRoutes"));


// Connect to Database
mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log("MySQL db connected successfully");
    app.listen(process.env.PORT, () => {
      console.log(`Server running successfully on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.stack || error);
  });
