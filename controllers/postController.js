const mySqlPool = require("../config/db");

// Get all posts
const getPosts = async (req, res) => {
  try {
    const data = await mySqlPool.query("SELECT * from posts");

    if (!data || data[0].length === 0) {
      return res.status(404).send({
        success: false,
        message: "No posts found",
      });
    } else {
      res.send(data[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GetAll Posts API",
    });
  }
};


// Get a single post by ID
const getPost = async (req, res) => {
  try {
    // Get the post ID from the route parameter
    const { id } = req.params;

    // Check if the post exists
    const [post] = await mySqlPool.query("SELECT * FROM posts WHERE id = ?", [id]);

    // If no post found
    if (!post || post.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Post Not Found",
      });
    } else {
      return res.status(200).send(post[0]);
    }
  } catch (error) {
    console.error("Error finding post:", error);
    res.status(500).send({
      success: false,
      message: "Error in Get Post API",
    });
  }
};

module.exports = { getPosts, getPost };
