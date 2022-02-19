class AccessMenuTable{
    showAllMenu(connection){
        const sql = `SELECT * FROM Menu`

        connection.query(sql, (e, result) => {
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    includeMenuItem(connection, values){
        const sql = `INSERT INTO Menu SET ?`
        connection.query(sql, values, (e, result) => {
            if(e){
                return e
            } else {
                return result
            }
        })
    }
}