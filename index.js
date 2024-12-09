const express = require('express');

const dotenv = require("dotenv");
dotenv.config();
const app= express();

app.use(express.json());

app.get("/users",(req,res)=>{
  res.status(200).send("<h1> Hello </h1>")
})

app.listen(process.env.PORT,()=>{
  console.log(`server running successfully on port ${process.env.PORT}`);
})