const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let orderSchema = new Schema({
  customer: {
    type: String
  },
  phone: {
    type: String
  },
  cart: [{
    type: Schema.Types.Mixed
  }],
  price: {
      type: Number
  },
}, {
  collection: 'orders'
})
module.exports = mongoose.model('Order', orderSchema)