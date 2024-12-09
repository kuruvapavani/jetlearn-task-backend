const express = require('express')
const { getPosts, getPost } = require('../controllers/postController');

const router = express.Router()

// routes


router.get('/getposts',getPosts);
router.get('/getpost/:id',getPost);

module.exports = router;