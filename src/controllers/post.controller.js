const PostService = require('../services/post.service');

var postController = {
    findPosts: findPosts,
    addPost: addPost,
    postDetail: postDetail,
    updatePost:updatePost,
    deletePost:deletePost

}

function findPosts(req, res) {
    PostService.findAll().then(data => {
        res.send(data)
    }).catch(errors => {
        res.status(400).json(errors);
    })
}

function addPost(req, res) {
    let post = req.body;
    PostService.create(post).
        then((data) => {
            res.send(data);
        })
        .catch((errors) => {
            res.status(400).json(errors);
        });
}


function postDetail(req, res) {

    PostService.detail(req.params.id).then(data => {
        res.send(data)
    }).catch(errors => {
        res.status(400).json(errors);
    })
}

function updatePost(req,res){
    PostService.update(req.body, req.params.id).then((data) => {
        res.status(200).json({
            message: "Post updated successfully",
            post: data
        })
    }).catch(errors => {
        res.status(400).json(errors);
    })
}

function deletePost(req, res){
    PostService.delete(req.params.id).then((data) => {
        res.status(200).json({
            message: "Post Delete successfully",
            post_id: req.params.id
        })
    }).catch(errors => {
        res.status(400).json(errors);
    })
}

module.exports = postController