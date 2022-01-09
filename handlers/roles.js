const express = require('express');
const router = express.Router();
const {Role} = require('../models/role.js');

router.post('',async(req,res)=>{
  try{
    const role = await Role.create(
      {
        name: req.body.name
      }
    );
    res.json(role);
  }catch (error){
    console.error("Role creation server error: ", error);
    res.status(500).send(error);
  };
});

router.patch('/:id',async(req,res)=>{
  try{
    await Role.update(
        req.body,
        {
          where:{
            id:req.params.id
          }
        }
    );
    res.json(role);
  }catch (error){
    console.error("Role update server error: ", error);
    res.status(500).send(error);
  };
});

router.delete('/:id',async(req,res)=>{
  try{
    await Role.destroy(
        {
          where:{
            id:req.params.id
          }
        }
    );
    res.json(role);
  }catch (error){
    console.error("Role destroy server error: ", error);
    res.status(500).send(error);
  };
});

router.get('/:id',async(req,res)=>{
  try{
    const role = await Role.findByPk(req.params.id);
    res.json(role);
  }catch (error){
    console.error("Role findByPk server error: ", error);
    res.status(500).send(error);
  };
});

router.get('',async(req,res)=>{
  try{
    const role = await Role.findAll();
    res.json(role);
  }catch (error){
    console.error("Role findAll server error: ", error);
    res.status(500).send(error);
  };
});


module.exports = router;
