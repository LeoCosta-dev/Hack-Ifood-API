const bd = require("../infra/populateTable")

module.exports = (app) => {
    app.get("/", (req, res) => {
        const query = req.query;
        const values = Object.values(query);
        console.log(query);
        console.log(values);
        res.status(200).json(bd)
    })
}