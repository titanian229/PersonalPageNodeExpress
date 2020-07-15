const express = require('express');
const home = require('./home');
const projects = require('./projects');

const router = express.Router();

router.get('/', home);
router.get('/projects', projects.projectsRoot);
router.get('/projects/:project', projects.projectSingle);

module.exports = router;
