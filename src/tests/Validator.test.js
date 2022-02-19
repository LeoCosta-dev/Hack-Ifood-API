const Validator = require('../services/Validator');

test('Verificar se a query é vazia', () => {
    expect(Validator.queryIsEmpty([])).toBe(true)
})

test('Verificar se a query é vazia', () => {
    expect(Validator.queryIsEmpty(['ingredientes', 'tomate'])).toBe(false)
})