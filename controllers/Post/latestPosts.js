const Post = require("../../models/postModel");

class latestPosts {
  async process(req, res) {
    try {
      const getLatestPost = [
        { $sort: { createdAt: -1 } },
        {
          $group: {
            _id: "$category",
            latestPost: { $first: "$$ROOT" },
          },
        },
        { $replaceRoot: { newRoot: "$latestPost" } },
      ];

      const posts = await Post.aggregate(getLatestPost);

      if (posts.length == 0) {
        throw "Latest posts not found";
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

module.exports = new latestPosts();
