const URLs = require('../models/URLs');
const Project = require('../models/projects');

const URLModel = new URLs();
const ProjectModel = new Project();

module.exports.projectSingle = async ({ params: { project } }, res) => {
    const projectName = await URLModel.getURL(project).then((item) => (item[0] ? item[0].name : ''));
    if (projectName === '') {
        res.redirect('/projects');
        return;
    }
    const projectInfo = await ProjectModel.getProject(projectName).then((pro) => pro[0]);

    res.render('projectinfotemplate', { title: projectName, ...projectInfo });
};

module.exports.projectsRoot = async (req, res) => {
    const projects = await ProjectModel.getAllProjects();

    res.render('projects', { title: 'My Projects', projects });
};
