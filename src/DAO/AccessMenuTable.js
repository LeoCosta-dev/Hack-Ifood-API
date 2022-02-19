class AccessMenuTable{
    static showAllMenu(database){
        const sql = `SELECT * FROM menu`

        database.query(sql, (e, result) => {
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    static includeMenuItem(database, values){
        const sql = `INSERT INTO Menu SET ?`
        database.query(sql, values, (e, result) => {
            if(e){
                console.log(e)
                return e
            } else {
                return result
            }
        })
    }
}

module.exports = AccessMenuTable;