var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cart');
const auth = require('../auth/auth');

router.get("/groups",auth.verifyUser,cartController.getCartGroups);
router.get("/groups/:id",auth.verifyUser,cartController.getCartGroup);
router.post("/groups",auth.verifyUser,cartController.createCartGroup);
router.put("/groups/:id/user",auth.verifyUser,cartController.addUserCartGroup);
router.put("/groups/:id/product",auth.verifyUser,cartController.addProductCartGroup);

module.exports = router;