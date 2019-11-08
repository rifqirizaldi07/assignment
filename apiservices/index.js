const express = require('express');
require('express-group-routes');

const app = express();
const port = Number(process.env.PORT || 5000);

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const TodoControllers = require('./controllers/todolist');

app.group('/api/v1', router => {
  router.get('/yolo', (req, res) => {
    //res means, response, and it send string "Hello Express!" to the API
    res.send('Hello Express!');
  });

  // Login
  router.get('/todolist', TodoControllers.index);
  router.post('/todos', TodoControllers.add);
  router.put('todo/:id', TodoControllers.edit);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
