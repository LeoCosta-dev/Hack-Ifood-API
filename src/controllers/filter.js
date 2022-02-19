const bd = require("../infra/populateTable")
const Filter = require('../models/Filter');
module.exports = (app) => {
    app.get("/", async (req, res) => {
        const query = req.query;
        const values = Object.values(query);
        const result = await Filter.showAllMenu(values)
        res.status(200).json(result)
    })
}