const DB = require('../config/db');

class URLModel {
    constructor() {
        this.db = new DB('urltranslator');
    }

    async getAllURLs() {
        return this.db.selectAll();
    }

    async getURL(url) {
        return this.db.selectSome('url', url);
    }
}

module.exports = URLModel;
