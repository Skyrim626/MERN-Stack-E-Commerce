const mongoose = require('mongoose');

/** A variable that is use to create a OrderItem Schema
 * By creating a schema we can create, read, update, delete collections of OrderItem's Data to our MongoDb collection
 */
const OrderItemSchema = new mongoose.Schema({

  order: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'orders'
  },

  quantity: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  }
});

// Getter
OrderItemSchema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
OrderItemSchema.path('price').set(function(num) {
  return num * 100;
});

module.exports = mongoose.model('orderItems', OrderItemSchema);