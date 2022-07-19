const express = require('express');
const router = express.Router();
const Controller = require('../controllers/post.controller')


router.get('/', Controller.findPosts);
router.post('/', Controller.addPost);
router.get('/:id', Controller.postDetail);
router.patch('/:id', Controller.updatePost)
router.delete('/:id', Controller.deletePost)

module.exports = router