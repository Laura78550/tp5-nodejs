const express = require('express');
const router = express.Router();
const {Post} = require('../models/post.js');
const {Comment} = require('../models/comment.js');

router.post('',async(req,res)=>{
  try{
    const post = await Post.create(
      {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
        author: req.body.author
      }
    );
    res.json(post);
  }catch (error){
    console.error("Post creation server error: ", error);
    res.status(500).send(error);
  };
});

router.patch('/:id',async(req,res)=>{
  try{
    await Post.update(
        req.body,
        {
          where:{
            id:req.params.id
          }
        }
    );
    res.json(post);
  }catch (error){
    console.error("Post update server error: ", error);
    res.status(500).send(error);
  };
});

router.delete('/:id',async(req,res)=>{
  try{
    await Post.destroy(
        {
          where:{
            id:req.params.id
          }
        }
    );
    res.json(post);
  }catch (error){
    console.error("Post destroy server error: ", error);
    res.status(500).send(error);
  };
});

router.get('/:id',async(req,res)=>{
  try{
    const post = await Post.findByPk(req.params.id);
    if(req.query.seeComments){
      const comments = await Comment.findAll({
        where: {
          post:post.id
        }
      });      
      res.json({post : post, comments : comments});
    }else{
      res.json(post);
    }
  }catch (error){
    console.error("Post findByPk server error: ", error);
    res.status(500).send(error);
  };
});

router.get('',async(req,res)=>{
  try{
    const post = await Post.findAll();
    res.json(post);
  }catch (error){
    console.error("Post findAll server error: ", error);
    res.status(500).send(error);
  };
});


module.exports = router;
