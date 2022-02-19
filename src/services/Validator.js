class Validator{
    static queryIsEmpty(query) {
        const isValid = Object.values(query).length === 0
        if(isValid) {
            return true
        } else {
            return false
        }
    }
}

module.exports = Validator;