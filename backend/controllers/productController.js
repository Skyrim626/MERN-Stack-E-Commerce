const Product = require('../models/Product');
const Category = require('../models/Category');
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all products
// @route Get /products
// @access Private
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().lean();

  // Check if there is no Collection of Products
  if(!products?.length) {
    return res.status(400).json(
      {
        message: "No products found"
      }
    )
  }

  // Responds a collection of Products
  res.json(products);

});

// @desc Create new product
// @route Get /products
// @access Private
const createNewProduct = asyncHandler(async (req, res) => {

  const {
    categoryType,
    productName,
    description,
    price,
    stock
  } = req.body;

  // Confirm(Verify) Data
  if(!categoryType || !productName || !description || !price || !stock) {
    // Status 400 means Error Request
    return res.status(400).json({
      message: "All fields are required"
    });
  } 

  // Check if the category exist
  const categoryName = await Category.findById(categoryType).exec();

  // Check if the Category Exist
  if(!categoryName) {
    return res.status(400).json({
      message: "Category not found"
    })
  }

  // Instantiate Product Object
  const productObject = { categoryType, productName, description, price, stock};

  // Create and store new product
  const product = await Product.create(productObject);

  // Check if the product is created
  if(product) {
    // If the user is created then execute this lines of code
    res.status(201).json({
      message: `New product ${product} created`
    });
  } else {
    // If the user is not created then execute this lines of code
    res.status(400).json({
      message: 'Invalid product data received'
    });
  }

});

// @desc Update a product
// @route PATCH /products
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  
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

  const product = await Product.findById(id).exec();

  // Check if the product does not exist
  if(!product) {
    return res.status(400).json({
      message: "Product not found"
    })
  }

  // Check for duplicate
  const duplicate = await Product.findOne({ email }).lean().exec()

  // Allow updates to the original product
  if(duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({
      message: "Duplicate Email"
    })
  }

  product.firstname = firstname;
  product.lastname = lastname;
  product.telNo = telNo;
  product.address = address;

  if(password) {
    // Hash Password
    product.password = await bcrypt.hash(password, 10) // salt rounds
  }

  const updateProduct = await product.save();

  res.json({
    message: `Info Update`
  })

});

// @desc Delete a product
// @route DELETE /products
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {

  const { id } = req.body;

  // Checks if the ID does not exist
  if(!id) {
    return res.status(400).json({
      message: "Product ID Required"
    })
  }

  const product = await Product.findById(id).exec();

  if(!product) {
    return res.status(400).json(
      {
        message: "Product Not found"
      }
    )
  }

  const result = await product.deleteOne();

  const reply = `Email ${result.email} with ID ${result._id} delete`;

  res.json(reply);

});


module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct
};