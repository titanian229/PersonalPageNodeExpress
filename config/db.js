const fs = require('fs');
const path = require('path');

class DB {
    constructor(tableName) {
        try {
            this.filename = path.join(__dirname, `${tableName}.json`);
            this.data = JSON.parse(fs.readFileSync(this.filename));
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
    }

    async selectAll() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.data);
            } catch (err) {
                reject(err);
            }
        });
    }

    async selectSome(column, value) {
        return new Promise((resolve, reject) => {
            try {
                const returnData = this.data.filter((item) => item[column] === value);
                resolve(returnData);
            } catch (err) {
                reject(err);
            }
        });
    }

    async insertOne(row) {
        return new Promise((resolve, reject) => {
            try {
                this.data.push(row);
                fs.writeFileSync(this.filename, this.data);
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }

    async wipeTable() {
        return new Promise((resolve, reject) => {
            try {
                this.data = [];
                fs.writeFileSync(this.filename, this.data);
                resolve([]);
            } catch (err) {
                reject(err);
            }
        });
    }
}

module.exports = DB;
