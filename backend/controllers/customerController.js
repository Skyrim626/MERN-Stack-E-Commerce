const Customer = require('../models/Customer');
const Cart = require('../models/Cart');
/* const Product = require('../models/Product'); */
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all customers
// @route Get /customers
// @access Private
const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find().select('-password').lean();

  // Check if there is no Collection of Customers
  if(!customers?.length) {
    return res.status(400).json(
      {
        message: "No customers found"
      }
    )
  }

  // Responds a collection of Customers
  res.json(customers);

});

// @desc Create new customer
// @route Get /customers
// @access Private
const createNewCustomer = asyncHandler(async (req, res) => {

  const {
    firstname,
    lastname,
    address,
    telNo,
    email,
    password
  } = req.body;

  // Confirm(Verify) Data
  if(!firstname || !lastname || !address || !telNo || !email || !password) {
    // Status 400 means Error Request
    return res.status(400).json({
      message: "All fields are required"
    });
  } 

  // Check for duplicate
  const duplicate = await Customer.findOne({ email }).lean().exec()

  // Checks if there is a email duplication
  if(duplicate) {
    // Status 409 means Conflict
    return res.status(409).json({
      message: "Duplicate Email"
    });
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

  // Instantiate Customer Object
  const customerObject = { firstname, lastname, address, telNo, email, "password": hashedPwd };

  // Create and store new customer
  const customer = await Customer.create(customerObject);

  // Check if the customer is created
  if(customer) {
    // If the user is created then execute this lines of code
    res.status(201).json({
      message: `New customer ${email} created`
    });
  } else {
    // If the user is not created then execute this lines of code
    res.status(400).json({
      message: 'Invalid customer data received'
    });
  }

});

// @desc Update a customer
// @route PATCH /customers
// @access Private
const updateCustomer = asyncHandler(async (req, res) => {
  
  const {
    id, 
    firstname,
    lastname,
    address,
    telNo,
    email,
    password
  } = req.body;

  /* const {
    id, 
    email,
    password
  } = req.body; */

  // Confirm(Verify) data
  if(!id || !email || !firstname || !lastname || !telNo || !address || !email || !password) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const customer = await Customer.findById(id).exec();

  // Check if the customer does not exist
  if(!customer) {
    return res.status(400).json({
      message: "Customer not found"
    })
  }

  // Check for duplicate
  const duplicate = await Customer.findOne({ email }).lean().exec()

  // Allow updates to the original customer
  if(duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({
      message: "Duplicate Email"
    })
  }

  customer.firstname = firstname;
  customer.lastname = lastname;
  customer.telNo = telNo;
  customer.address = address;

  if(password) {
    // Hash Password
    customer.password = await bcrypt.hash(password, 10) // salt rounds
  }

  const updateCustomer = await customer.save();

  res.json({
    message: `Info Update`
  })

});

// @desc Delete a customer
// @route DELETE /customers
// @access Private
const deleteCustomer = asyncHandler(async (req, res) => {

  const { id } = req.body;

  // Checks if the ID does not exist
  if(!id) {
    return res.status(400).json({
      message: "Customer ID Required"
    })
  }

  const customer = await Customer.findById(id).exec();

  if(!customer) {
    return res.status(400).json(
      {
        message: "Customer Not found"
      }
    )
  }

  const result = await customer.deleteOne();

  const reply = `Email ${result.email} with ID ${result._id} delete`;

  res.json(reply);

});


module.exports = {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
  deleteCustomer
};