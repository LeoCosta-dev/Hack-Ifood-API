const Validator = require('../services/Validator')
const AccessMenuTable = require('../DAO/AccessMenuTable')
class Filter{
    static showAllMenu(query) {
        const queryValues = Object.values(query);
        const isValid = Validator.queryIsEmpty(query);
        if(isValid) {
            const response = AccessMenuTable.showAllMenu();
            return response
        } else {
            console.log(('não tá vazia'));
        }
    }
}
module.exports = Filter;