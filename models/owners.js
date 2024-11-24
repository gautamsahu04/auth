const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema(
  {
    name : {
      type: String,
      minLength: 3,
      trim: true,
    },
    email: String,
    password: String,
    products: {
      types: Array,
      default: [],
    },
    isadmin: Boolean,
    address: String,
    contact: Number,
    picture: String,
    gstin: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("owner", ownerSchema);
