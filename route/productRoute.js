const express = require('express')
const route = express.Router()
const {isloggedIn} = require('../middlewares/isloggedIn')



route.get("/",(req,res)=>{
    res.render("shop")

})
route.get("/pro",isloggedIn, (req,res)=>{
    res.send("welcome to the product route you are login")
})


module.exports = route