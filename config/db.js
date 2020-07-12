const fs = require('fs');

class DB {
    constructor(tableName) {
        try {
            this.data = fs.readFileSync(`./${tableName}.json`);
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
}

module.exports = DB;
