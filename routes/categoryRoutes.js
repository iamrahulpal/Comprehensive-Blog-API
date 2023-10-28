const express = require("express");
const router = express.Router();

router.post("/", require("../controllers/category/createCategory").process);//Create category
router.delete("/:id", require("../controllers/category/deleteCategory").process);//Delete category


module.exports = router;
