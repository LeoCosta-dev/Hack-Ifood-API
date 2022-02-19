const bd = require("../infra/populateTable")
const Filter = require('../models/Filter');
module.exports = (app) => {
    app.get("/", (req, res) => {
        const query = req.query;
        const values = Object.values(query);
        const result = Filter.showAllMenu(values)
        res.status(200).json(result)
    })
}