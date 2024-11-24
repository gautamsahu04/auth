const express =require('express')
const jwt = require('jsonwebtoken')
const userModel = require('../models/users')


module.exports =  {

    isloggedIn: async function(req, res, next) {
        // console.log(req.cookies)
        if (!req.cookies.token) {
            return res.status(401).send("You must be logged In");
        }
        
        try {
            const data = jwt.verify(req.cookies.token, process.env.SECRET);
            let user = await userModel.findOne({email:data.email}).select("-password")
            req.user = user;
            next();
        } catch (error) {
             res.redirect('/');

        }
       
    }
    
}