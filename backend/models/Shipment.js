const mongoose = require('mongoose');

/** A variable that is use to create a Shipment Schema
 * By creating a schema we can create, read, update, delete collections of Shipment's Data to our MongoDb collection
 */
const ShipmentSchema = new mongoose.Schema({

  shipmentDate: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('shipments', ShipmentSchema);