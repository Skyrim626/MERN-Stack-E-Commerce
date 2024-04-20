const mongoose = require('mongoose');

/** A variable that is use to create a Order Schema
 * By creating a schema we can create, read, update, delete collections of Order's Data to our MongoDb collection
 */
const OrderSchema = new mongoose.Schema({

  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'customers'
  },

  payment: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'payments'
  },

  shipment: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'shipments'
  },
  orderDate: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }

});

// Getter
OrderSchema.path('totalPrice').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
OrderSchema.path('totalPrice').set(function(num) {
  return num * 100;
});

module.exports = mongoose.model('orders', OrderSchema);