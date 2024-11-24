const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  // validateduser
  // create Mngodb user
  // do password encryption
  // save  data to mongodb
  // send the response to client
  registerUser: async function (req, res) {
    const user = new userModel(req.body); // Create an instance
    user.password = await bcrypt.hash(req.body.password, 10); // Hash the password
    // console.log(user._id)
    try {
      const response = await user.save(); // Save the instance
      response.password = undefined;
      res.status(201).json({ message: "success", data: response }); // Respond with success
    } catch (error) {
      res.status(500).json({ message: "error", data: error }); // Handle errors
    }
  },

  loginUser: async function (req, res) {
    // Implementation for login
    // check if user exists
    // check user email
    // check password
    // create jwt token
    //send the response
    try {
      let user = await userModel.findOne({email: req.body.email});
      if(!user) return res.status(401).send("invalid email or password");
  
      
      let isPasswordEqual = await bcrypt.compare(req.body.password, user.password);
      if(!isPasswordEqual) return res.status(401).send("invalid email or password");
  
      const tokenPayload = {
          id: user._id,
          email: user.email,
          name: user.name          
      };
  
    
      const jwtToken = jwt.sign(tokenPayload, process.env.SECRET, {expiresIn: "1h"});
      res.cookie("token", jwtToken).send("successfully login");
          
  } catch (error) {
      
      res.status(500).json({message: "error", error: error});
  } 
  
  },
};
