const mongoose = require('mongoose');

/** A variable that is use to create a Category Schema
 * By creating a schema we can create, read, update, delete collections of Category's Data to our MongoDb collection
 */
const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('categories', CategorySchema);