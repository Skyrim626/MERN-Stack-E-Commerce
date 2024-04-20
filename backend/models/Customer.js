const mongoose = require('mongoose');

/** A variable that is use to create a Customer Schema
 * By creating a schema we can create, read, update, delete collections of Customer's Data to our MongoDb collection
 */
const CustomerSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  tel_no: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('customers', CustomerSchema);