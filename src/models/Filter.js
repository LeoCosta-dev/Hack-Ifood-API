const Validator = require('../services/Validator')
const AccessMenuTable = require('../DAO/AccessMenuTable')
class Filter {
    static async showAllMenu(query) {
        const queryValues = Object.values(query);
        const isValid = Validator.queryIsEmpty(query);
        if (isValid) {
            const response = AccessMenuTable.showAllMenu();
            return response
        } else {
            const response = await this.filterForIngredients(queryValues)
            return response
        }
    }
    static async filterForIngredients(values) {
        const data = AccessMenuTable.showAllMenu()
        const selection = []
        selection.splice(0)
        for(let i=0; data.length > i; i++){
            let testResult = []
            let ingredients = data[i].ingredients.join()
            for(let j = 0; values.length > j; j++){
                const test = ingredients.includes(values[j])
                if(test){
                    testResult.push(true)
                }
            }
            if(testResult.length == 0){
                selection.push(data[i])
            }
        }
        return selection
    }
    static async getForIngredients(values) {
        const data = AccessMenuTable.showAllMenu()
        const selection = []
        selection.splice(0)
        for(let i=0; data.length > i; i++){
            let testResult = []
            let ingredients = data[i].ingredients.join()
            for(let j = 0; values.length > j; j++){
                const test = ingredients.includes(values[j])
                if(!test){
                    testResult.push(true)
                }
            }
            if(testResult.length == 0){
                selection.push(data[i])
            }
        }
        return selection
    }
}
module.exports = Filter;
