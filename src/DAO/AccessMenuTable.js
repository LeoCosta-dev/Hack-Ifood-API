const data = require('../infra/populateTable')
class AccessMenuTable {
    static showAllMenu() {
        const copyData = data.slice();
        return copyData;
    }

}

module.exports = AccessMenuTable;