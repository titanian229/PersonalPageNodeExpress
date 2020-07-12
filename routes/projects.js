const URLs = require('../models/URLs');
const Project = require('../models/projects');

const URLModel = new URLs();
const ProjectModel = new Project();

async function projectSingle(req, res) {
    const projectURL = req.params.project;
    const projectName = await URLModel.getURL(projectURL).then((item) => (item[0] ? item[0].name : ''));
    if (projectName === '') {
        res.redirect('/projects');
        return;
    }
    const project = await ProjectModel.getProject(projectName).then((pro) => pro[0]);

    res.render('projectinfotemplate', { title: projectName, ...project });
}

async function projectsRoot(req, res) {
    const projects = await ProjectModel.getAllProjects();

    res.render('projects', { title: 'My Projects', projects });
}

module.exports = { projectsRoot, projectSingle };
