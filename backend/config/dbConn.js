const mongoose = require("mongoose");

// A variable that contains a function for MongoDB Connection
const connectDB = async () => {
  try {

    await mongoose.connect(process.env.DATABASE_URI);

  } catch(err) {

    console.log(err);

  }
}

module.exports = connectDB;