require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

/** 3rd Party Middleware */
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');
const { logEvents } = require('./middleware/logger');

/** PORT NUMBER 
 * 
 * If the environment has not declared a specific port number then 3500 will be the default port number
*/
const PORT = process.env.PORT || 3500;

// Test Node Environment
console.log(process.env.NODE_ENV);

// Connect MongoDB
connectDB();

// Add Customer Middleware named logger
app.use(logger);

// Add Cors Policy Middleware
app.use(cors(corsOptions));

// Add express.json Middleware
app.use(express.json());


// Add Cookie Parser Middleware
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));

/****************** */
/****************** */
/****************** */
/****************** */
/** Routing Section */
app.use('/', require('./routes/root'));
app.use('/customers', require('./routes/customerRoutes'));
app.use('/products', require('./routes/productRoutes'));
app.use('/categories', require('./routes/categoryRoutes'));
/****************** */
/****************** */
/****************** */
/****************** */

/** Checks if the request resource does not exist */
app.all('*', (req, res) => {
  res.status(404);

  /** If the requests is html type then display a view of 404.html */
  if(req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } 
  
  /** If the requests is json type then respond json message 404 not found */
  else if(req.accepts('json')) {
    res.json({
      message: '404 Not Found'
    });
  }

  /** Else any text type then display a txt type of 404 Not Found */
  else {
    res.type('txt').send('404 Not Found');
  }

});

// Use Error Handler Middleware
app.use(errorHandler);

// Listen to open event
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})

// Check if the connection to MongoDB is error
// Add an error mongoErrLog log when database connection is error
mongoose.connection.on('error', err => {
  console.log(err);
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});
