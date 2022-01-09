const express = require('express');
const router = express.Router();
const {User} = require('../models/user.js');
const {Post} = require('../models/post.js');

router.post('',async(req,res)=>{
  try{
    const user = await User.create(
      {
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        email: req.body.email,
        username: req.body.username,
        githubLink: req.body.githubLink,
        role: req.body.role,
      }
    );
    res.json(user);
  }catch (error){
    console.error("User creation server error: ", error);
    res.status(500).send(error);
  };
});

router.patch('/:id',async(req,res)=>{
  try{
    await User.update(
        req.body,
        {
          where:{
            id:req.params.id
          }
        }
    );
    res.json(user);
  }catch (error){
    console.error("User update server error: ", error);
    res.status(500).send(error);
  };
});

router.delete('/:id',async(req,res)=>{
  try{
    await User.destroy(
        {
          where:{
            id:req.params.id
          }
        }
    );
    res.json(user);
  }catch (error){
    console.error("User destroy server error: ", error);
    res.status(500).send(error);
  };
});

router.get('/:id',async(req,res)=>{
  try{
    const user = await User.findByPk(req.params.id);
    if(req.query.seePosts){
      const posts = await Post.findAll({
        where: {
          author:user.id
        }
      });      
      res.json({user : user, posts : posts});
    }else{
      res.json(user);
    }
  }catch (error){
    console.error("User findByPk server error: ", error);
    res.status(500).send(error);
  };
});

router.get('',async(req,res)=>{
  try{
    const user = await User.findAll();
    res.json(user);
  }catch (error){
    console.error("User findAll server error: ", error);
    res.status(500).send(error);
  };
});


module.exports = router;
