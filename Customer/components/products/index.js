const express = require("express");
const router = express.Router();
const productControllers = require("./productsControllers");
/* GET home page. */
router.get("/", productControllers.list);

router.get("/:productID", productControllers.details);

module.exports = router;
