const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
dotenv.config({ path: "./.env" });
require("./db/connection");
// const User = require("./userregister/datafom");

//for json data reeding
app.use(express.json());
// router require
app.use(require("./router/routs"));

const port = process.env.PORT;

middeleware = (req, res, next) => {
  console.log("this is middelwere response");
  next();
};

// get routing

// app.get("/", (req, res) => {
//   res.send("hello world this is home page created by nirbhay");
// });

// app.get("/about", middeleware, (req, res) => {
//   res.send("hello world this about page is created by nirbhay");
//   console.log("this is about response");
// });

// app.get("/service", (req, res) => {
//   res.send("hello world this is service page created by nirbhay");
// });

// app.get("/login", (req, res) => {
//   res.send("hello world this is login page created by nirbhay");
// });

// app.get("/singup", (req, res) => {
//   res.send("hello world this is signup page created by nirbhay");
// });

// app.get("/profile", (req, res) => {
//   res.send("hello world this is profile page after login created by nirbhay");
// });

app.listen(port, () => {
  console.log(`app renning on port no ${port}`);
});
