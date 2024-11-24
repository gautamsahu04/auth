const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    image: String,
    name: String,
    price: String,
    discount: {
      type: Number,
      default: 0,
    },
    bgcolor: String,
    textcolor: String,
    panelcolor: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
