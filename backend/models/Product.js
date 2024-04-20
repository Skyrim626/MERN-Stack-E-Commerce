const mongoose = require('mongoose');

/** A variable that is use to create a Product Schema
 * By creating a schema we can create, read, update, delete collections of Product's Data to our MongoDb collection
 */
const ProductSchema = new mongoose.Schema({
  
  categoryType: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'categories'
  },
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },

});

// Getter
ProductSchema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
ProductSchema.path('price').set(function(num) {
  return num * 100;
});

module.exports = mongoose.model('products', ProductSchema);