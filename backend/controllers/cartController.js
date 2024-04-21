const Cart = require('../models/Cart');
const Product = require('../models/Product');
const Customer = require('../models/Customer');
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all carts
// @route Get /carts
// @access Private
const getAllCarts = asyncHandler(async (req, res) => {

  /* console.log("ACT")
  console.log(req.params);
  console.log(req.body);
  console.log("ACT") */

  /* const customer = req.params.id;

  console.log(customer); */

  /* const {
    customer
  } = req.body; */

  // Verify Data
  /* if(!customer) {
    return res.status(400).json(
      {
        message: "No id found"
      }
    )
  }  */

  // Find carts based on user ID
  /* const carts = await Cart.find({ customer }).lean(); */

  const carts = await Cart.find().lean();

  // Check if carts were found
  if(!carts?.length) {
    return res.status(400).json(
      {
        message: "No carts found for the specified user ID"
      }
    )
  }

  // Responds a collection of Carts
  res.json(carts);

});

// @desc Create new cart
// @route Get /carts
// @access Private
const createNewCart = asyncHandler(async (req, res) => {

  const {
    customer,
    product,
    quantity
  } = req.body;

  // Confirm(Verify) Data
  if(!customer || !product || !quantity) {
    // Status 400 means Error Request
    return res.status(400).json({
      message: "All fields are required"
    });
  } 

  // Instantiate Cart Object
  const cartObject = { customer, product, quantity};

  // Create and store new cart
  const cart = await Cart.create(cartObject);

  // Check if the cart is created
  if(cart) {
    // If the user is created then execute this lines of code
    res.status(201).json({
      message: `New cart ${cart} created`
    });
  } else {
    // If the user is not created then execute this lines of code
    res.status(400).json({
      message: 'Invalid cart data received'
    });
  }

});

// @desc Update a cart
// @route PATCH /carts
// @access Private
const updateCart = asyncHandler(async (req, res) => {
  
  const {
    id,
    customer,
    product,
    quantity
  } = req.body;

  // Confirm(Verify) data
  if(!customer || !product || !quantity) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const cart = await Cart.findById(id).exec();

  // Check if the cart does not exist
  if(!cart) {
    return res.status(400).json({
      message: "Cart not found"
    })
  }

  cart.customer = customer;
  cart.product = product;
  cart.quantity = quantity;

  const updateCart = await cart.save();

  res.json({
    message: `Info Update`
  })

});

// @desc Delete a cart
// @route DELETE /carts
// @access Private
const deleteCart = asyncHandler(async (req, res) => {

  const { id } = req.body;

  // Checks if the ID does not exist
  if(!id) {
    return res.status(400).json({
      message: "Cart ID Required"
    })
  }

  const cart = await Cart.findById(id).exec();

  if(!cart) {
    return res.status(400).json(
      {
        message: "Cart Not found"
      }
    )
  }

  const result = await cart.deleteOne();

  const reply = `Cart ${result.email} with ID ${result._id} delete`;

  res.json(reply);

});


/* const getCartsByCustomerId = asyncHandler(async (req, res) => {
  const { customer } = req.body;

  console.log(req.body);

  if (!customer) {
    return res.status(400).json({
      message: "Customer ID is required"
    });
  }

  const carts = await Cart.find({ customer: customer }).lean();

  if (!carts?.length) {
    return res.status(404).json({
      message: "No carts found for the specified customer ID"
    });
  }

  res.json(carts);
});
 */
module.exports = {
  getAllCarts,
  createNewCart,
  updateCart,
  deleteCart,
  /* getCartsByCustomerId */
};