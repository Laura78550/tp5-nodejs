const express  = require('express');
const usersRoutes = require('./handlers/users.js');
const rolesRoutes = require('./handlers/roles.js');
const postsRoutes = require('./handlers/posts.js');
const commentsRoutes = require('./handlers/comments.js');

const app = express();
const port = 3000;

app.use('/users', usersRoutes);
app.use('/roles', rolesRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

app.listen(port,()=>{
  console.log(`Exemple app listening at http://localhost:${port}`);
})

