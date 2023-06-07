const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: Array, required: true },
    categories: { type: Array },
    size: { type: Array },
    price: { type: Number, required: true },
    pricedetail: { type: Array, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
