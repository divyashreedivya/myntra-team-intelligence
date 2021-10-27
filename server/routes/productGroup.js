var express = require('express');
var router = express.Router();
var productGroupController = require('../controllers/productGroup');

router.get("/",productGroupController.getGroups);
router.post("/",productGroupController.createGroup);
router.get("/:id",productGroupController.getGroup);
router.put("/:id/add",productGroupController.addProducts);
router.put("/:id/remove",productGroupController.removeProduct);
router.delete("/:id",productGroupController.deleteGroup);

module.exports = router;