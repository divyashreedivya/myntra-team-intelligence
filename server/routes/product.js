var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');

router.get("/",productController.getProducts);
router.post("/",productController.addProduct);
router.get("/:id",productController.getProduct);
router.put("/:id",productController.editProduct);
router.delete("/:id",productController.deleteProduct);

module.exports = router;