class CreateTable {
    static init(connection) {
        this.connection = connection
        this.CreateTable()
    }
    static CreateTable(){
        const sql = `
        CREATE TABLE IF NOT EXISTS Menu(
            id INT PRIMARY KEY,
            cuisine VARCHAR(255),
            ingredients VARCHAR (25555)
        )
        `
        this.connection.query(sql, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Tabelas criadas com sucesso!")
            }
        })
    }
}

module.exports = CreateTable;