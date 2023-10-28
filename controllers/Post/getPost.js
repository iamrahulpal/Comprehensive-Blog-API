const Post = require("../../models/postModel");

class getPost {
  async process(req, res) {
    try {
      const posts = await Post.find().sort({ timestamp: -1 });

      if (posts.length == 0) {
        throw "Posts not found";
      }

      res.status(200).json({
        type: "Success",
        data: posts,
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
