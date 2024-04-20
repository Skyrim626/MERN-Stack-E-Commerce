const mongoose = require('mongoose');

/** A variable that is use to create a Payment Schema
 * By creating a schema we can create, read, update, delete collections of Payment's Data to our MongoDb collection
 */
const PaymentSchema = new mongoose.Schema({

  customer: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'customers'
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  paymentMethod: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }

});

// Getter
PaymentSchema.path('amount').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
PaymentSchema.path('amount').set(function(num) {
  return num * 100;
});


module.exports = mongoose.model('payments', PaymentSchema);