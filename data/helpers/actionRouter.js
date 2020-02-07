const express = require('express');
const router = express.Router();
const Actions = require('../helpers/actionModel');


router.get('/', (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error getting actions.'});
    });
});

router.post('/', (req, res) => {
  const actions = req.body;
  Actions.insert(actions)
    .then(actions => {
      res.status(201).json(actions);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error adding action'});
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const name = req.body;
  Actions.update(id, name)
    .then((action) => {
      res.status(201).json(action)
    //     Actions(id)
    //     .then(action => res.status(200).json(action))
    //     .catch(err => {
    //       console.log(err);
    //       res.status(500).json({error: "Error getting action."});
    //     });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error updating action'});
    });
});

router.delete('/:id', (req, res) => {
  //const { id } = req.user;
  Actions.remove(req.params.id)
    .then(() => res.status(204).end())
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error deleting action'});
    });
});

module.exports = router


