const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoryController");

const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router.route('/')
  .get(categoriesController.getAllCategories)
  .post(categoriesController.createNewCategory)
  .patch(categoriesController.updateCategory)
  .delete(categoriesController.deleteCategory)

module.exports = router;