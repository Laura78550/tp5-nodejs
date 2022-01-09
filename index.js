const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const {User} = require('./models/user.js');
//const {Post} = require('./models/post.js');
//const {Comment} = require('./models/comment.js');
//const {Role} = require('./models/role.js');

app.post('/users',async(req,res)=>{
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

app.patch('/users/:id',async(req,res)=>{
  try{
    await User.update(
        req.body,
        {
          where:{
            id:id
          }
        }
    );
    res.json(user);
  }catch (error){
    console.error("User update server error: ", error);
    res.status(500).send(error);
  };
});

app.delete('/users/:id',async(req,res)=>{
  try{
    await User.destroy(
        {
          where:{
            id:id
          }
        }
    );
    res.json(user);
  }catch (error){
    console.error("User update server error: ", error);
    res.status(500).send(error);
  };
});

app.get('/users/:id',async(req,res)=>{
  try{
    const user = await User.findByPk(id);
    res.json(user);
  }catch (error){
    console.error("User update server error: ", error);
    res.status(500).send(error);
  };
});

app.get('/users',async(req,res)=>{
  try{
    const user = await User.findAll();
    res.json(user);
  }catch (error){
    console.error("User update server error: ", error);
    res.status(500).send(error);
  };
});

app.listen(port,()=>{
  console.log(`Exemple app listening at http://localhost:${port}`);
})

