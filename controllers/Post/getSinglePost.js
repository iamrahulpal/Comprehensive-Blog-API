const Post = require("../../models/postModel");

class getPost {
  async process(req, res) {
    try {
      let id = req.params.id;

      const post = await Post.find({ _id: id });

      if (post.length == 0) {
        throw "Post not found.";
      }

      res.status(200).json({
        type: "Success",
        data: post[0],
      });
    } catch (error) {
      res.status(400).json({
        type: "Error",
        error: error.error || error,
      });
    }
  }
}

module.exports = new getPost();
