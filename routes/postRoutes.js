const express = require("express");
const router = express.Router();

router.get("/latest", require("../controllers/Post/latestPosts").process); // Get latest post form each category
router.get("/", require("../controllers/Post/getPost").process); // Get all posts
router.get("/:id", require("../controllers/Post/getSinglePost").process); // Get single post
router.post("/", require("../controllers/Post/createPost").process); // Create post
router.delete("/:id", require("../controllers/Post/deletePost").process); // Delete post
router.put("/:id", require("../controllers/Post/updatePost").process); // Update post

module.exports = router;
