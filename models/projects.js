const DB = require('../config/db');

class ProjectModel {
    constructor() {
        this.db = new DB('projects');
    }

    async getAllProjects() {
        return this.db.selectAll();
    }

    async getProject(name) {
        return this.db.selectSome('name', name);
    }
}

module.exports = ProjectModel;
