const express = require('express');
const index = require('./routes/index');
const projects = require('./routes/projects');

const router = express.Router();

router.get('/', index.index);
router.get('/projects', projects.projectsRoot);
router.get('/projects/:project', projects.projectSingle);

module.exports = router;
