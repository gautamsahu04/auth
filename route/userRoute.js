const express = require('express')
const route = express.Router()
const userModel = require('../models/users')
const bcrypt = require('bcrypt')
const {registerUser, loginUser } = require('../user controllers/index')
const {userRegistervalidate, loginValidate }= require('../utils/userValidation')
const cookie = require('cookie-parser')
const { isloggedIn }= require('../middlewares/isloggedIn')

route.get('/', (req, res) => {
    res.send("welcome to the user route")
    
})

route.post('/register', userRegistervalidate, registerUser)

route.post('/login',loginValidate,  loginUser )

route.get('/product', isloggedIn,  (req, res) => {
    res.send("werlcome to the product part")
    
})

route.get('/logout', (req, res) => {
    res.cookie("token", "").send("logout successfully")
    
})



module.exports = route