const models = require('../models');

const todo = models.todo;

exports.index = (req, res) => {
  todo.findAll().then(data => {
    res.send(data);
  });
};

exports.add = (req, res) => {
  todo
    .create({
      name: req.body.name,
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send({
        error: true,
        message: 'Error',
      });
    });
};

exports.edit = (req, res) => {
  const id = req.params.id;

  todo
    .update(
      {
        name: req.body.name,
      },
      {
        where: {id: id},
      },
    )
    .then(data => {
      res.send({data});
    });
};
