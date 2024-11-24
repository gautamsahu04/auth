const express = require("express");
const router = express.Router();
const ownersModel = require("../models/owners");

router.post("/create", async (req, res) => {
  let owners = await ownersModel.find();

  if (owners.length > 0) {
    return res.status(503).send("you dont have the permission");
  } else {
    let { name, email, password } = req.body;
    let createdOwner = await ownersModel.create({
      name,
      email,
      password,
    });
    
    res.status(201).send("created owner");
  }
});

router.get("/", (req, res) => {
  res.send("hello it owonerssss route ");
});

module.exports = router;
