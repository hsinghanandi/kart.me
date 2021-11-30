const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const { String, ObjectId, Number } = Schema.Types;

const cartSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String
    },
    isPurchased: {
      type: Boolean,
      default: false,
    },
    items: [
      {
        quantity: { type: Number },
        title: { type: String },
        price: { type: String },
        description: { type: String },
        image: { type: String },
        category: { type: String },
        productId: { type: String },
      },
    ],
    address: { type: String },
    phone: { type: String },
    state: { type: String },
    city: { type: String },
    country: { type: String },
  },
  { versionKey: false }
);

const cartModel = mongoose.model("Cart", cartSchema);

module.exports = cartModel;
