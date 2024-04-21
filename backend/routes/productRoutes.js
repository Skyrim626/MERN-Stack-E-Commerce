const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productController");

/* const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT); */

router.route('/')
  .get(productsController.getAllProducts)
  .post(productsController.createNewProduct)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct)

module.exports = router;