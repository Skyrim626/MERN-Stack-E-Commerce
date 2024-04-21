const express = require("express");
const router = express.Router();
const cartsController = require("../controllers/cartController");

const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router.route('/')
  .get(cartsController.getAllCarts)
  .post(cartsController.createNewCart)
  .patch(cartsController.updateCart)
  .delete(cartsController.deleteCart)

/* router.route('/:id').get(cartsController.getAllCarts); */

module.exports = router;