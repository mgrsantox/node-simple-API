const Post  = require('../models/post.models')

var PostService = {
    findAll:findAll,
    create:create,
    detail:finById,
    update:updatePost,
    delete:deletePost
}

function findAll(){
    return Post.findAll();
}

function create(post) {
    var newPost = new Post(post);
    return newPost.save();
}

function finById(id){
    return Post.findByPk(id);
}

function updatePost(post, id){
    var updatePost = {
        title:post.title,
        description:post.description
    };
    Post.update(updatePost, {where:{id:id}});
    return Post.findByPk(id);
}

function deletePost(id){
    return Post.destroy({where:{id:id}})
}

module.exports = PostService