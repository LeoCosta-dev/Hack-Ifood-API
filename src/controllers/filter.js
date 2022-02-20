const bd = require("../infra/populateTable")
const Filter = require('../models/Filter');
module.exports = (app) => {
    app
        .get("/filter", async (req, res) => {
            const query = req.query;
            const values = Object.values(query);
            const result = await Filter.filterForIngredients(values)
            res.status(200).json(result)
        })
        .get("/search", async (req, res) => {
            const query = req.query;
            const values = Object.values(query);
            const result = await Filter.getForIngredients(values)
            res.status(200).json(result)
        })
}