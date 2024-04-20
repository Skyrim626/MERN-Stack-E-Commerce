const mongoose = require('mongoose');

/** A variable that is use to create a Cart Schema
 * By creating a schema we can create, read, update, delete collections of Cart's Data to our MongoDb collection
 */
const CartSchema = new mongoose.Schema({

  customer: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'customers'
  },

  product: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'products'
  },

  quantity: {
    type: Number,
    required: false,
  }

});

module.exports = mongoose.model('carts', CartSchema);