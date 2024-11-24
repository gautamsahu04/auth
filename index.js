const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const usermodel = require("./models/users");
const ownerModel = require('./models/owners')
const products = require('./models/products')

const db = require('./config/db')
const path = require("path")
const userRoute = require('./route/userRoute')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const productRoute = require('./route/productRoute')
const ownerRoute = require('./route/ownerRoute')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine", "ejs");
app.use(cookieParser()) 
app.use(bodyParser.json())                      //use of this ????


app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/owner", ownerRoute);

// Your routes and other middleware go here

app.get("/", (req, res) => {
  res.send("Hello auth project!");
});






const PORT = process.env.PORT ||8080;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
