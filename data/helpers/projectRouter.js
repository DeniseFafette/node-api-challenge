const express = require('express');
const router = express.Router();
const Projects = require('../helpers/projectModel');

router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error getting projects.'});
    });
});

router.get('/:id/actions', (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error getting projects.'});
    });
});

router.post('/', (req, res) => {
  const actions = req.body;
  Projects.insert(actions)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error adding project'});
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const name = req.body;
  Projects.update(id, name)
    .then((proj) => {
      res.status(201).json(proj)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error updating project'});
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Projects.remove(id)
    .then(() => res.status(204).end())
    .catch(err => {
      console.log(err);
      res.status(500).json({error: 'Error deleting project'});
    });
});

module.exports = router