const Post = require("../../models/postModel");

class deletePost {
  async checkPost(id) {
    try {
      let post = await Post.findOne({ _id: id });

      if (!post) {
        throw "Post doesn't exists.";
      }

      return "";
    } catch (error) {
      throw error;
    }
  }
  process = async (req, res) => {
    try {
      let id = req.params.id;
      let updatePost = req.body;

      let response = await this.checkPost(id);

      const post = await Post.updateOne({ _id: id }, updatePost);

      if (!post.modifiedCount == 1) {
        throw "Failed to update post.";
      }

      res.status(200).json({
        type: "Success",
        data: "Post has been updated successfully",
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  };
}

module.exports = new deletePost();
