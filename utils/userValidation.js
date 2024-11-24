const Joi = require("joi");

const userRegistervalidate = function (req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string(),
    email: Joi.string().email().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {return res.status(400).send("something went  wrong")}
  next()
// agar koi error nahi aya matlb validation sahi hai 

};
const loginValidate = function (req, res, next) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
      password: Joi.string(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {return res.status(400).send("problem in validation")}
    next()
  // agar koi error nahi aya matlb validation sahi hai 
  
  };
module.exports = { userRegistervalidate, loginValidate }