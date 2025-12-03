const mongoose = require('mongoose');
 
const orderSchema = new mongoose.Schema({
  product: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0 },
  discount: { type: Number, required: false, min: 0 },
  total: { type: Number, required: true, min: 0 },
}, { timestamps: true });
 
module.exports = mongoose.model('Order', orderSchema);