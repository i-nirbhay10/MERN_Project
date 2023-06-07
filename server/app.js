const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env" });

const port = process.env.PORT;

// db connection

const URI = process.env.DATABASE;

mongoose
  .connect(URI)
  .then(() => {
    console.log("database connection successfull");
  })
  .catch((error) => console.log(error));

// use middeleware

middeleware = (req, res, next) => {
  console.log("this is middelwere response");
  next();
};

// get routing

app.get("/", (req, res) => {
  res.send("hello world this is home page created by nirbhay");
});

app.get("/about", middeleware, (req, res) => {
  res.send("hello world this about page is created by nirbhay");
  console.log("this is about response");
});

app.get("/service", (req, res) => {
  res.send("hello world this is service page created by nirbhay");
});

app.get("/login", (req, res) => {
  res.send("hello world this is login page created by nirbhay");
});

app.get("/singup", (req, res) => {
  res.send("hello world this is signup page created by nirbhay");
});

app.get("/profile", (req, res) => {
  res.send("hello world this is profile page after login created by nirbhay");
});

console.log("working");

app.listen(port, () => {
  console.log(`app renning on port no ${port}`);
});
