const Category = require('../models/Category');
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// @desc Get all categories
// @route Get /categories
// @access Private
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().lean();

  // Check if there is no Collection of Categories
  if(!categories?.length) {
    return res.status(400).json(
      {
        message: "No categories found"
      }
    )
  }

  // Responds a collection of Categories
  res.json(categories);

});

// @desc Create new category
// @route Get /categories
// @access Private
const createNewCategory = asyncHandler(async (req, res) => {

  const {categoryName} = req.body;

  // Confirm(Verify) Data
  if(!categoryName) {
    // Status 400 means Error Request
    return res.status(400).json({
      message: "Category name is required"
    });
  } 

  // Check for duplicate
  const duplicate = await Category.findOne({ categoryName }).lean().exec()

  // Checks if there is a email duplication
  if(duplicate) {
    // Status 409 means Conflict
    return res.status(409).json({
      message: "Duplicate Category"
    });
  }

  // Instantiate Category Object
  const categoryObject = { categoryName };

  // Create and store new category
  const category = await Category.create(categoryObject);

  // Check if the category is created
  if(category) {
    // If the user is created then execute this lines of code
    res.status(201).json({
      message: `New category ${categoryName} created`
    });
  } else {
    // If the user is not created then execute this lines of code
    res.status(400).json({
      message: 'Invalid category data received'
    });
  }

});

// @desc Update a category
// @route PATCH /categories
// @access Private
const updateCategory = asyncHandler(async (req, res) => {
  
  const {
    id,
    categoryName
  } = req.body;

  
  // Confirm(Verify) data
  if(!categoryName || !id) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const category = await Category.findById(id).exec();

  // Check if the category does not exist
  if(!category) {
    return res.status(400).json({
      message: "Category not found"
    })
  }

  // Check for duplicate
  const duplicate = await Category.findOne({ categoryName }).lean().exec()

  // Allow updates to the original category
  if(duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({
      message: "Duplicate Category name"
    })
  }

  category.categoryName = categoryName;

  const updateCategory = await category.save();

  res.json({
    message: `Category Update`
  })

});

// @desc Delete a category
// @route DELETE /categories
// @access Private
const deleteCategory = asyncHandler(async (req, res) => {

  const { id } = req.body;

  // Checks if the ID does not exist
  if(!id) {
    return res.status(400).json({
      message: "Category ID Required"
    })
  }

  const category = await Category.findById(id).exec();

  if(!category) {
    return res.status(400).json(
      {
        message: "Category Not found"
      }
    )
  }

  const result = await category.deleteOne();

  const reply = `Category Name: ${result.categoryName} with ID ${result._id} deleted`;

  res.json(reply);

});


module.exports = {
  getAllCategories,
  createNewCategory,
  updateCategory,
  deleteCategory
};