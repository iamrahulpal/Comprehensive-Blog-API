const Post = require("../../models/postModel");
const Category = require("../../models/categoryModel");

class getPost {
  async getCategory(category) {
    try {
      let getCategory = await Category.findOne({ name: category });

      return getCategory._id;
    } catch (error) {
      throw "Category not found";
    }
  }
  process = async (req, res) => {
    try {
      const { title, content, category } = req.body;

      const categoryId = await this.getCategory(category);

      const post = await Post.create({ title, content, category: categoryId });

      if (post.length == 0) {
        throw "Failed to create post.";
      }

      res.status(201).json({
        type: "Success",
        data: "Post created successfully.",
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  };
}

module.exports = new getPost();
