const fs = require('fs');
const path = require('path');
const Project = require('./models/projects');
// const URL = require('./models/URLs');

const ProjectModel = new Project();
// const URLModel = new URL();

(async function () {
    const allProjects = await ProjectModel.getAllProjects();
    let urls = allProjects.map((project) => ({
        url: project.name.toLowerCase().replace(/[\s]|[^A-Za-z]/, ''),
        name: project.name,
    }));
    urls = JSON.stringify(urls);
    fs.writeFileSync(path.join(__dirname, '/config/urltranslator.json'), urls);
}());
