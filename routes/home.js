const Project = require('../models/projects');

const ProjectModel = new Project();

module.exports = async (req, res) => {
    const projects = await ProjectModel.getAllProjects();
    res.render('index', {
        title: 'James T Lee',
        scripts: ['indexanimations.js', 'indexlisteners.js', 'projectslidein.js'],
        projects,
    });
};
