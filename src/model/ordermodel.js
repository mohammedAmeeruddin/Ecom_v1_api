const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  craetedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
