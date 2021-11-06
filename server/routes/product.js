var express = require('express');
var router = express.Router();
var productController = require('../controllers/product');
const auth = require('../auth/auth');

router.get("/",productController.getProducts);
router.post("/",auth.verifyUser,auth.verifyAdmin,productController.addProduct);
router.get("/:id",productController.getProduct);
router.put("/:id",auth.verifyUser,auth.verifyAdmin,productController.editProduct);
router.delete("/:id",auth.verifyUser,auth.verifyAdmin,productController.deleteProduct);

module.exports = router;