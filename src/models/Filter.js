const Validator = require('../services/Validator')
const AccessMenuTable = require('../DAO/AccessMenuTable')
class Filter {
    static showAllMenu(query) {
        const queryValues = Object.values(query);
        const isValid = Validator.queryIsEmpty(query);
        if (isValid) {
            const response = AccessMenuTable.showAllMenu();
            return response
        } else {
            const response = this.filterForIngredients(queryValues)
            return response
        }
    }
    static filterForIngredients(values) {
        const data = AccessMenuTable.showAllMenu()
        for(let i = 0; values.length < i; i++){
            data.forEach(element => {
                const test = element.ingredients.includes(values[i])
                if(test){
                    const index = data.indexOf(element)
                    data.splice(index, 1)
                }
            });
        }
        return data
    }
}
module.exports = Filter;
