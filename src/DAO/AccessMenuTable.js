class AccessMenuTable{
    showAllMenu(connection){
        const sql = `SELECT * FROM Menu`

        connection.query(sql, (e, result) => {
            if(e){
                console.log(e.message)
            } else {
                return result
            }
        })
    }
}