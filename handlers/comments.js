const express = require('express');
const router = express.Router();
const {Comment} = require('../models/comment.js');

router.post('',async(req,res)=>{
  try{
    const comment = await Comment.create(
      {
        content: req.body.content,
        date: req.body.date,
        author: req.body.author,
        post: req.body.post
      }
    );
    res.json(comment);
  }catch (error){
    console.error("Comment creation server error: ", error);
    res.status(500).send(error);
  };
});

router.patch('/:id',async(req,res)=>{
  try{
    await Comment.update(
        req.body,
        {
          where:{
            id:req.params.id
          }
        }
    );
    res.json(comment);
  }catch (error){
    console.error("Comment update server error: ", error);
    res.status(500).send(error);
  };
});

router.delete('/:id',async(req,res)=>{
  try{
    await Comment.destroy(
        {
          where:{
            id:req.params.id
          }
        }
    );
    res.json(comment);
  }catch (error){
    console.error("Comment destroy server error: ", error);
    res.status(500).send(error);
  };
});

router.get('/:id',async(req,res)=>{
  try{
    const comment = await Comment.findByPk(req.params.id);
    res.json(comment);
  }catch (error){
    console.error("Comment findByPk server error: ", error);
    res.status(500).send(error);
  };
});

router.get('',async(req,res)=>{
  try{
    const comment = await Comment.findAll();
    res.json(comment);
  }catch (error){
    console.error("Comment findAll server error: ", error);
    res.status(500).send(error);
  };
});


module.exports = router;
